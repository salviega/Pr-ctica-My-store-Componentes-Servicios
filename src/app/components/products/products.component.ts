import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { StoreService } from 'src/app/services/store/store.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  myShoppingCar: Product[] = [];
  total: number = 0;
  products: Product[] = []
  today = new Date();
  date = new Date(2022,8,3)

  constructor(private storeService: StoreService, private productService: ProductsService) { 
    this.myShoppingCar = this.storeService.getShoppingCar();
  }

  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    })
  }

  onAddToShoppingCar(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
