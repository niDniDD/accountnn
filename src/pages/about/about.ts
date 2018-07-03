import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  
  data = {
    receipts: '',
    howmuch: '',
  }

  logForm() {
    console.log(this.data)
  }

  constructor(public navCtrl: NavController) {

  }

}
