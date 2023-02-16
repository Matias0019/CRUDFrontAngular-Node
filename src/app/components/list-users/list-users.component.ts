import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GetList } from 'src/app/interfaces/get-list';
import { User } from 'src/app/interfaces/user';
import { GetUsersService } from 'src/app/services/get-list.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listUsers: Array<User> = [];
  results: GetList = {};
  constructor(private getUsersService: GetUsersService, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers(){
    this.getUsersService.getList().subscribe((data: any) => {
      this.listUsers = data.results;
    })
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      this.getListUsers();
      this.toastr.warning('El usuario fue eliminado con exito', 'Usuario eliminado');
    })
  }

}
