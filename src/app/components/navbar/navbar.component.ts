import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store/store.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  
  activeMenu = false;
  counter = 0;

  constructor(private storeService:StoreService) {
   }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }


}

