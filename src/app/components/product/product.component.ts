import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: '',
    title: '',
    image: '',
    price: 0,
    description: '',
    category: ''
  };

  @Output() addredProduct = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  addToCar() {
    this.addredProduct.emit(this.product);
  }
 
}
