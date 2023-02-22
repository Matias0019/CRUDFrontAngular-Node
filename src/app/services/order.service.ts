import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetList } from '../interfaces/get-list';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint2;
    this.myApiUrl = 'v1/orders/';
  }

  getList():Observable<GetList>{
    return this.http.get<GetList>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  
  deleteOrder(id: string): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveOrder(order: Order): Observable<void> {{
  return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, order);
  }}

  getOrder(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateOrder(id: string, order: Order): Observable<void> {
    return this.http.patch<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, order);
  }
}
