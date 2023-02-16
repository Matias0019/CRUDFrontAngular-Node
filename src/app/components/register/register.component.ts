import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Register } from 'src/app/interfaces/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
     private router: Router) { 
      this.registerform = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
        name: ['', [Validators.required, Validators.minLength(3)]],
      })
     }

  ngOnInit(): void {
  }

  registerNewUser(){
    const register: Register = {
      email: this.registerform.value.email,
      password: this.registerform.value.password,
      name: this.registerform.value.name,
    }
    this.authService.registerNewUser(register).subscribe(() => {
      this.router.navigate(['/']);
    })
    }

}
