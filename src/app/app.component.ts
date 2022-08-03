import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photo: string = '';
  disable: boolean = true;

  products: Product[] = [{
    id: '1',
    name: 'product 1',
    image: '../../../assets/images/defaultPhoto.png',
    price: '100'
  },
  {
    id: '2',
    name: 'product 1',
    image: '../../../assets/images/defaultPhoto.png',
    price: '100'
  },
  {
    id: '3',
    name: 'product 1',
    image: '../../../assets/images/defaultPhoto.png',
    price: '100'
  },
  {
    id: '4',
    name: 'product 1',
    image: '../../../assets/images/defaultPhoto.png',
    price: '100'
  }]

  onLoad(img: string) {
    console.log('Llego la respuesta del componente hijo', img)
  }

  onDisable() {
    if (this.disable) this.disable = false;
    else this.disable = true;
  }
}
