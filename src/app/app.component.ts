import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mat3m';

  imgSrc = 'https://picsum.photos/300/300';
  currentCustomer = 'Omar Ali';
  clickMessege!:any;

  onSave(ev:Event){
    console.log('Hello Clicked',ev);
  }

  onKeyDown(ev:Event){
    console.log('Hello Clicked keyDown',ev);
  }
}
