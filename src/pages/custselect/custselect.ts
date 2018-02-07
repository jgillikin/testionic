import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Item } from './../../models/item/item.model';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ToastService } from './../../services/toast/toast.service';

@Component({
  selector: 'page-custselect',
  templateUrl: 'custselect.html'
})
export class CustselectPage {

 fontSize: number = .8;

 groceries: any;
 item: Item = {
 item: '',
 upc: 0,
 desc: '',
 location: '',
 quantity: 0,
 lot: ''
}; 


  pushPage: any;
  Customer: any;
  section

  shoppingList$: Observable<Item[]>;
  platformList: string = '';
  isApp: boolean = true;


 
    constructor(public navCtrl: NavController,
private shopping: ShoppingListService,
public platform: Platform, private toast: ToastService) {
 
        this.groceries = [
            'Units Sell Through',
            'Projection by Prev Month Sales',
            'Low Quantity Report',
            'Division 1',
            'Division 2'
        ];

        let platforms = this.platform.platforms();

        this.platformList = platforms.join(', ');

     if (this.platform.is('core') ||                	     	this.platform.is('mobileweb')) {
     this.isApp = false;
      }


        this.shoppingList$ = this.shopping
				.getShoppingList() //DB List
				.snapshotChanges() //key and value
				.map(changes => {
				    return changes.map(c => ({
					key: c.payload.key, 
					...c.payload.val()
      			    }))
 				 });

 
    } //end constructor
 
    onChange () {
     let emailS = this.Customer;
     //alert(emailS);
     this.navCtrl.setRoot(HomePage, {
      emailS: emailS
       });
    }

}
