import { Component } from '@angular/core';

@Component({
  selector: 'app-z4',
  templateUrl: './z4.page.html',
  styleUrls: ['./z4.page.scss'],
})
export class Z4Page  {

  constructor() { }
  count:number = 0;

  counter() {

    this.count += 1;
  }

  reset(){

    this.count = 0;
  }

}
