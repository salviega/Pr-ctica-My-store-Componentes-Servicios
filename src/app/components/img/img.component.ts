import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() photo: string = '';
  @Output() loaded: EventEmitter<string> = new EventEmitter<string>();

  defaultPhoto: string = 'assets/images/defaultPhoto.png';
  constructor() { }

  ngOnInit(): void {
  }

  catchError() {
    this.photo = this.defaultPhoto;
  }

  loadPhoto() {
    if (this.photo !== this.defaultPhoto) {
      console.log('el componente hijo acaba de enviar información al componente padre');
      this.loaded.emit(this.photo);
    }
  }

}
