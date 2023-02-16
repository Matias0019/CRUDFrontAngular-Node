import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
     private router: Router, private toastr: ToastrService) { 
      this.loginform = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]]
      })
     }

  ngOnInit(): void {
  }

  login(){
    const login: Login = {
      email: this.loginform.value.email,
      password: this.loginform.value.password,
    };
    this.authService.login(login).subscribe((res) => {
      window.localStorage.setItem("access", res.tokens.access.token)
      window.localStorage.setItem("refresh", res.tokens.refresh.token)
      this.toastr.success(
        `Usuario ${login.email} logueado correctamente`,
        `Login`
      );
      this.router.navigate(['/']);
    },
    (err) => {
      console.log(err);
    }
    )
    }

}
