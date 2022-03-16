import { Component } from '@angular/core';

@Component({
  selector: 'app-z2',
  templateUrl: './z2.page.html',
  styleUrls: ['./z2.page.scss'],
})
export class Z2Page  {

  constructor() { }
  count:number = 0;

  counter() {

    this.count += 1;
  }

  reset(){

    this.count = 0;
  }

}
