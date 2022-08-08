import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCar: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable(); //Observale
  private total: number = 0;
  
  
  constructor() { }

  addProduct(product: Product) {
    this.myShoppingCar.push(product)
    this.myCart.next(this.myShoppingCar);
  }

  getShoppingCar() {
    return this.myShoppingCar;
  }

  getTotal(){
    return this.total = this.myShoppingCar.reduce((sum, item) => sum + item.price, 0)

  }

}
