import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import decode from 'jwt-decode';

// @Injectable({
//   providedIn: 'root'
// })
// export class RoleGuard implements CanActivate {

//   constructor(public auth: AuthService, public router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot): boolean {
//     if (this.auth.role === 'admin') {
//       return true;
//     } else {
//       this.router.navigateByUrl('/dashboard');
//       return false;
//     }
//   }
  
// }
