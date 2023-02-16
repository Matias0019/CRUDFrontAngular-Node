import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const headers = new HttpHeaders({
      'token-usuario': 'ABCDHDGBFNJSFSF4567463NVHF'
    });

    const newReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + this.authService.token)
    });

    return next.handle(newReq).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('/v1/auth/login');
        }

        return throwError( err );

      })
    );
}
}
