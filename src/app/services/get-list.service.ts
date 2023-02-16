import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetList } from '../interfaces/get-list';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  private myAppUrl: string;
  private ApiUsersUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.ApiUsersUrl = 'v1/users/';
  }

  getList():Observable<GetList>{
    return this.httpClient.get<GetList>(`${this.myAppUrl}${this.ApiUsersUrl}`);
  }
}
