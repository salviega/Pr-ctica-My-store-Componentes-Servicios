import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // assets/images/photo.jpeg
  photo: string = '';

  onLoad(img: string) {
    console.log('Llego la respuesta del componente hijo', img)
  }
}
