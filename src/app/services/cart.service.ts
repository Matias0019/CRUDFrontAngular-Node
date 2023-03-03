import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../interfaces/cart';
import { GetList } from '../interfaces/get-list';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'v1/cart/';
  }

  getList():Observable<GetList>{
    return this.http.get<GetList>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  
  deleteCart(id: string): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveCart(cart: Cart): Observable<void> {{
  return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, cart);
  }}

  getCart(id: string): Observable<Cart> {
    return this.http.get<Cart>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateCart(id: string, cart: Cart): Observable<void> {
    return this.http.patch<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, cart);
  }
}
