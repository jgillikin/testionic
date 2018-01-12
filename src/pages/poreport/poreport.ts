import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Item } from './../../models/po/po.model';
import { ContactPage } from '../contact/contact';
import { AngularFireDatabase, AngularFireAction,AngularFireList } from 'angularfire2/database';
import { ToastService } from './../../services/toast/toast.service';

@Component({
  selector: 'page-poreport',
  templateUrl: 'poreport.html'
})
export class POReportPage {

 groceries: any;
item: Item = {
 prodId: '',
 qtyC: '',
 qtyO: '',
 dateOrdered: '',
 orderedBy: '',
 upc: '',
 desc: ''
}; 


pushPage: any;

section


shoppingList$: Observable<Item[]>;

 
    constructor(public navCtrl: NavController,
private shopping: ShoppingListService,
public platform: Platform, private toast: ToastService,public db: AngularFireDatabase) {
 
        this.groceries = [
            'Units Sell Through',
            'Projection by Prev Month Sales',
            'Low Quantity Report',
            'Division 1',
            'Division 2'
        ];

this.shoppingList$ = this.shopping
				.getPOList() //DB List
				.snapshotChanges() //key and value
				.map(changes => {
				    return changes.map(c => ({
					key: c.payload.key, 
					...c.payload.val()
      			    }))
 				 });



 
    } //end constructor
 

}
