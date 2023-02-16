import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form: FormGroup;
  operacion: string = 'New';

  constructor(private fb: FormBuilder, private userService: UserService,
     private router: Router, private toastr: ToastrService, private aRouter: ActivatedRoute) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    })
    
  }

  ngOnInit(): void {
  }

  addUser(){
    const user: User = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
      role: this.form.value.role
    }
    
    this.userService.createUser(user).subscribe(() => {
      this.toastr.success(`El usuario ${user.name} fue registrado con exito`, `Usuario registrado`);
      this.router.navigate(['/v1/users']);
    })

    
  }

}
