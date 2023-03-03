import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/interfaces/cart';
import { GetList } from 'src/app/interfaces/get-list';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-shopping-cart',
  templateUrl: './add-edit-shopping-cart.component.html',
  styleUrls: ['./add-edit-shopping-cart.component.css']
})
export class AddEditShoppingCartComponent implements OnInit {
  form: FormGroup;
  id: string;
  operacion: string = 'New';
  results: GetList = {};
  productId: Array<Product> = [];

  constructor(private fb: FormBuilder, private cartService: CartService, private productService: ProductService,
    private router: Router, private toastr: ToastrService, private aRouter: ActivatedRoute) { 
      this.form = this.fb.group({
        productId: [null, Validators.required],
        quantity: [null, Validators.required],
      })
      this.id = String(aRouter.snapshot.paramMap.get('id'));
    }

  ngOnInit(): void {
    if(this.id != "null") {
      this.operacion = 'Update';
      this.getCart(this.id);
    }
    this.getListProducts();
  }

  getListProducts(){
    this.productService.getList().subscribe((data: any) => {
      this.productId = data.results;
    })
  }

  getCart(id: string){
    this.cartService.getCart(id).subscribe((data: Cart) => {
      this.form.setValue({
        productId: data.productId,
        quantity: data.quantity,
      })
    })
  }

  addCart(){
    const cart: Cart = {
      productId: this.form.value.productId,
      quantity: this.form.value.quantity,
    }

    if(this.id != "null"){

      this.cartService.updateCart(this.id, cart).subscribe(() => {
        this.toastr.info(`El carrito fue actualizado con exito`, `Carrito actualizado`);
        this.router.navigate(['/v1/cart']);
      })
    } else {
    this.cartService.saveCart(cart).subscribe(() => {
      this.toastr.success(`El carrito fue registrado con exito`, `Carrito registrado`);
      this.router.navigate(['/v1/cart']);
    })
    }

    
  }
}
