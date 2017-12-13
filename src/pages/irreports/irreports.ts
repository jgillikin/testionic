import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-irreports',
  templateUrl: 'irreports.html'
})
export class IrreportsPage {

 groceries: any;
 
    constructor(public navCtrl: NavController) {
 
        this.groceries = [
            'Units Sell Through',
            'Projection by Prev Month Sales',
            'Low Quantity Report',
            'Division 1',
            'Division 2'
        ];
 
    }
 

}
