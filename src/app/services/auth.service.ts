import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login';
import { Register } from '../interfaces/register';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private myAppUrl: string;
  private ApiRegisterUrl: string;
  private ApiLoginUrl: string;

  constructor(private http: HttpClient, private router: Router, public jwtHelper: JwtHelperService) { 
    this.myAppUrl = environment.endpoint;
    this.ApiRegisterUrl = 'v1/auth/register/';
    this.ApiLoginUrl = 'v1/auth/login/';
  }

  public registerNewUser(register: Register):Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}${this.ApiRegisterUrl}`, register);
  }

  public login(login: Login): Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}${this.ApiLoginUrl}`, login);
  }

  get token(){
    return localStorage.getItem('access') || '';
  }

  // get role(): 'admin' | 'user' {
  //   return this.usuario.role;
  // }

  // get headers() {
  //   return {
  //     headers: {
  //       'x-token': this.token
  //     }
  //   }
  // }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
