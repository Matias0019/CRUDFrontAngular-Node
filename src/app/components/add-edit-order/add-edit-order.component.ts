import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/interfaces/cart';
import { GetList } from 'src/app/interfaces/get-list';
import { Order } from 'src/app/interfaces/order';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-order',
  templateUrl: './add-edit-order.component.html',
  styleUrls: ['./add-edit-order.component.css']
})
export class AddEditOrderComponent implements OnInit {
  form: FormGroup;
  id: string;
  operacion: string = 'New';
  results: GetList = {};
  carts: Array<Cart> = [];

  constructor(private fb: FormBuilder, private orderService: OrderService, private cartService: CartService,
    private router: Router, private toastr: ToastrService, private aRouter: ActivatedRoute) { 
      this.form = this.fb.group({
        carts: [null, Validators.required],
      })
      this.id = String(aRouter.snapshot.paramMap.get('id'));
    }

  ngOnInit(): void {
    if(this.id != "null") {
      this.operacion = 'Update';
      this.getOrder(this.id);
    }
    this.getListCarts();
  }

  getListCarts(){
    this.cartService.getList().subscribe((data: any) => {
      this.carts = data.results;
    })
  }

  getOrder(id: string){
    this.orderService.getOrder(id).subscribe((data: Order) => {
      this.form.setValue({
        carts: data.carts,
      })
    })
  }

  addOrder(){
    const order: Order = {
      carts: this.form.value.carts
    }

    if(this.id != "null"){

      this.orderService.updateOrder(this.id, order).subscribe(() => {
        this.toastr.info(`La orden fue actualizada con exito`, `Orden actualizada`);
        this.router.navigate(['/v1/orders']);
      })
    } else {
    this.orderService.saveOrder(order).subscribe(() => {
      this.toastr.success(`La orden fue registrada con exito`, `Orden registrada`);
      this.router.navigate(['/v1/orders']);
    })
    }

    
  }

}
