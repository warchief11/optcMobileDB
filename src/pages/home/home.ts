import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Title:string
  
  constructor(public navCtrl: NavController) {
    this.Title = "optc db";
  }

}
