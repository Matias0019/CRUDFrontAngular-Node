import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  form: FormGroup;
  id: string;
  operacion: string = 'New';

  constructor(private fb: FormBuilder, private userService: UserService,
     private router: Router, private toastr: ToastrService, private aRouter: ActivatedRoute) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    })
    this.id = String(aRouter.snapshot.paramMap.get('id'));
    
  }

  ngOnInit(): void {
    if(this.id != "") {
      this.operacion = 'Update';
      this.getUser(this.id);
    }
  }

  getUser(id: string){
    this.userService.getUser(id).subscribe((data: User) => {
      this.form.setValue({
        name: data.name,
        email: data.email
      })
    })
  }

  addUser(){
    const user: User = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
      role: this.form.value.role
    }
      
    
      this.userService.updateUser(this.id, user).subscribe(() => {
        this.toastr.info(`El usuario ${user.name} fue actualizado con exito`, `Usuario actualizado`);
        this.router.navigate(['/v1/users']);
      })
   

    
  }
}
