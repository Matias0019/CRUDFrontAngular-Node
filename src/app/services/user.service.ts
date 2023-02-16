import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private myAppUrl: string;
  private ApiUsersUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.ApiUsersUrl = 'v1/users/';
  }

  getUser(id: string): Observable<User>{
    return this.http.get<User>(`${this.myAppUrl}${this.ApiUsersUrl}${id}`);
  }

  createUser(user: User): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.ApiUsersUrl}`, user);
  }

  updateUser(id: string, user: User): Observable<void> {
    return this.http.patch<void>(`${this.myAppUrl}${this.ApiUsersUrl}${id}`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.ApiUsersUrl}${id}`);
  }
}
