import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCar: Product[] = [];
  private total: number = 0;
  
  
  constructor() { }

  addProduct(product: Product) {
    this.myShoppingCar.push(product)
  }

  getShoppingCar() {
    return this.myShoppingCar;
  }

  getTotal(){
    return this.total = this.myShoppingCar.reduce((sum, item) => sum + item.price, 0)

  }

}
