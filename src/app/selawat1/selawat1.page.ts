import { Component } from '@angular/core';

@Component({
  selector: 'app-selawat1',
  templateUrl: './selawat1.page.html',
  styleUrls: ['./selawat1.page.scss'],
})
export class Selawat1Page  {

  constructor() { }
  count:number = 0;

  counter() {

    this.count += 1;
  }

  reset(){

    this.count = 0;
  }

}
