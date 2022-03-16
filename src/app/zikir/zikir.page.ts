import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';

@Component({
  selector: 'app-zikir',
  templateUrl: './zikir.page.html',
  styleUrls: ['./zikir.page.scss'],
})
export class ZikirPage implements OnInit {

  constructor(private nativeAudio: NativeAudio) { }

  ngOnInit() {
  }

}
