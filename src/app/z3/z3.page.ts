import { Component } from '@angular/core';

@Component({
  selector: 'app-z3',
  templateUrl: './z3.page.html',
  styleUrls: ['./z3.page.scss'],
})
export class Z3Page  {

  constructor() { }
  count:number = 0;

  counter() {

    this.count += 1;
  }

  reset(){

    this.count = 0;
  }

}
