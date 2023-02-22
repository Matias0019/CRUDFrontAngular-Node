import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GetList } from 'src/app/interfaces/get-list';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  results: GetList = {};
  listOrders: Array<Order> = [];
  constructor(private orderService: OrderService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListOrders();
  }

  getListOrders(){
    this.orderService.getList().subscribe((data: any) => {
      this.listOrders = data.results;
    })
  }

  deleteOrder(id: string) {
    this.orderService.deleteOrder(id).subscribe(() => {
      this.getListOrders();
      this.toastr.warning('La orden fue eliminado con exito', 'Orden eliminada');
    })
  }
}
