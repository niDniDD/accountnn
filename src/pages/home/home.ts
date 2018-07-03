import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

