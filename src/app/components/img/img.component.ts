import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit, OnDestroy, OnChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  photo: string = '';
  @Input('photo') 
  set changeImg(newImg: string) {
    this.photo = newImg;
    console.log('change just image')
    // code
  }
  @Output() loaded: EventEmitter<string> = new EventEmitter<string>();
  counter = 0;

  defaultPhoto: string = 'assets/images/defaultPhoto.png';
  constructor() { 
    // before render
    // don't async
    console.log('constructor', 'imgValue =>', this.photo)
  }

  ngOnChanges() {
    //before render
    //change inputs --times
    console.log('OnChanges', 'imgValue =>', this.photo)

  }
  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.photo)
    this.counter = window.setInterval(() => {
      this.counter +1;
      console.log('run counter')
    }, 1000);
  }

  ngAfterViewInit(): void {
    // after render
    // handler children
    console.log('ngAfterViewInit', 'imgValue =>', this.photo)
  }

  ngOnDestroy(): void {
    // delete component
    console.log('OnDestroy', 'imgValue =>', this.photo)
    window.clearInterval(this.counter)
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
