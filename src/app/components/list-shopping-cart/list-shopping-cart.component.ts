import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/interfaces/cart';
import { GetList } from 'src/app/interfaces/get-list';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-list-shopping-cart',
  templateUrl: './list-shopping-cart.component.html',
  styleUrls: ['./list-shopping-cart.component.css']
})
export class ListShoppingCartComponent implements OnInit {
  results: GetList = {};
  listCart: Array<Cart> = [];
  constructor(private cartService: CartService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListCarts();
  }

  getListCarts(){
    this.cartService.getList().subscribe((data: any) => {
      this.listCart = data.results;
    })
  }

  deleteCart(id: string) {
    this.cartService.deleteCart(id).subscribe(() => {
      this.getListCarts();
      this.toastr.warning('El carrito fue eliminado con exito', 'Carrito eliminado');
    })
  }
}
