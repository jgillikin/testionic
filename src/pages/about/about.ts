import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Item } from './../../models/item/item.model';

import { IrreportsPage } from '../irreports/irreports';
import { InventoryPage } from '../inventory/inventory';
import { HomePage } from '../home/home';
import { AddLocationPage } from '../addlocation/addlocation';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

pushPage: any;

section
groceries

  shoppingList$: Observable<Item[]>;

  constructor(public navCtrl: NavController, 
private shopping: ShoppingListService) {

  this.pushPage = AddLocationPage;

  this.section = "one";

  this.groceries = [
            'Units Sell Through',
            'Projection by Prev Month Sales',
            'Low Quantity Report',
            'Division 1',
            'Division 2'
        ];


this.shoppingList$ = this.shopping
				.getShoppingList() //DB List
				.snapshotChanges() //key and value
				.map(changes => {
				    return changes.map(c => ({
					key: c.payload.key, 
					...c.payload.val()
      			    }))
 				 });
			      


  }

  page1: any = IrreportsPage;
  page2: any = InventoryPage;


}
