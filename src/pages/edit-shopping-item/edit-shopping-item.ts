import { Component } from '@angular/core';
import { ToastService } from './../../services/toast/toast.service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingListService2 } from '../../services/shopping-list/shopping-list2.service';
import { Item } from './../../models/location/item.model';
import { TabsPage } from '../tabs/tabs';
import { AboutPage } from '../about/about';



/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
 item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: ShoppingListService2, private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item){
     this.shopping.editItem(item).then(() => {
      this.toast.show(`${item.name} saved!`, 3000)
      this.navCtrl.setRoot(AboutPage);
     });
  }

  removeItem(item: Item) {
    this.shopping.removeItem(item)
       .then(() => {
         this.toast.show(`${item.name} deleted!`);
         this.navCtrl.setRoot(AboutPage);
    });

  }

}
