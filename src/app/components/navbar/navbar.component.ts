import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  
  activeMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }


}

