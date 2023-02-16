import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: string;
  operacion: string = 'New';

  constructor(private fb: FormBuilder, private _productService: ProductService,
     private router: Router, private toastr: ToastrService, private aRouter: ActivatedRoute) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required]
    })
    this.id = String(aRouter.snapshot.paramMap.get('id'));
    
  }

  ngOnInit(): void {
    if(this.id != "null") {
      this.operacion = 'Update';
      this.getProduct(this.id);
    }
  }

  getProduct(id: string){
    this.loading = true;
    this._productService.getProduct(id).subscribe((data: Product) => {
      this.loading = false;
      this.form.setValue({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock
      })
    })
  }

  addProduct(){
    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock
    }

    this.loading = true;

    if(this.id != "null"){

      this._productService.updateProduct(this.id, product).subscribe(() => {
        this.loading = false;
        this.toastr.info(`El producto ${product.name} fue actualizado con exito`, `Producto actualizado`);
        this.router.navigate(['/v1/products']);
      })
    } else {
    this._productService.saveProduct(product).subscribe(() => {
      this.loading = false;
      this.toastr.success(`El producto ${product.name} fue registrado con exito`, `Producto registrado`);
      this.router.navigate(['/v1/products']);
    })
    }

    
  }

}
