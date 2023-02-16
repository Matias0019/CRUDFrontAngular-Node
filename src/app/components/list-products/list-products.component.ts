import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { GetList } from 'src/app/interfaces/get-list';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  results: GetList = {};
  listProducts: Array<Product> = [];
  loading: boolean = false;

  constructor(private _productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts(){
    this._productService.getList().subscribe((data: any) => {
      this.listProducts = data.results;
    })
  }

  deleteProduct(id: string) {
    this.loading = true;
    this._productService.deleteProduct(id).subscribe(() => {
      this.getListProducts();
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
    })
  }

}
