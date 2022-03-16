import { Component } from '@angular/core';

@Component({
  selector: 'app-z1',
  templateUrl: './z1.page.html',
  styleUrls: ['./z1.page.scss'],
})
export class Z1Page  {

  constructor() { }
  count:number = 0;

  counter() {

    this.count += 1;
  }

  reset(){

    this.count = 0;
  }

}
