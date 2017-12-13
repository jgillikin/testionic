import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';
import { ToastService } from './../../services/toast/toast.service';
import { Item } from './../../models/item/item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AboutPage } from '../about/about';


/**
 * Generated class for the AddLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addlocation',
  templateUrl: 'addlocation.html',
})
export class AddLocationPage {

item: Item = {
 name: '',
 quantity: 0,
 price: 0,
 plu: '9781414380704'
};

  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: ShoppingListService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLocationPage');
  }

  addItem(item: Item) { 
   this.shopping.addItem(item).then(ref => {
      this.toast.show(`${item.name} added!`);
      this.navCtrl.setRoot(AboutPage, { key: ref.key });
   });
  }
}
