import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetList } from 'src/app/interfaces/get-list';
import { Order } from 'src/app/interfaces/order';
import { Product } from 'src/app/interfaces/product';
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
  product: Array<Product> = [];

  constructor(private fb: FormBuilder, private orderService: OrderService, private productService: ProductService,
    private router: Router, private toastr: ToastrService, private aRouter: ActivatedRoute) { 
      this.form = this.fb.group({
        address: ['', Validators.required],
        country: ['', Validators.required],
        phone: [null, Validators.required],
        total: [null, Validators.required],
        product: [null, Validators.required],
      })
      this.id = String(aRouter.snapshot.paramMap.get('id'));
    }

  ngOnInit(): void {
    if(this.id != "null") {
      this.operacion = 'Update';
      this.getOrder(this.id);
    }
    this.getListProducts();
  }

  getListProducts(){
    this.productService.getList().subscribe((data: any) => {
      this.product = data.results;
    })
  }

  getOrder(id: string){
    this.orderService.getOrder(id).subscribe((data: Order) => {
      this.form.setValue({
        address: data.address,
        country: data.country,
        phone: data.phone,
        total: data.total,
        product: data.product,
      })
    })
  }

  addOrder(){
    const order: Order = {
      address: this.form.value.address,
      country: this.form.value.country,
      phone: this.form.value.phone,
      total: this.form.value.total,
      product: this.form.value.product
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
