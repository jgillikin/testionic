import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { ToastService } from '../../services/toast/toast.service';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Observable } from 'rxjs/Observable';
import { Item } from './../../models/item/item.model';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


   //items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  items$: any;
  size$: BehaviorSubject<string|null>;

  platformList: string = '';
  isApp: boolean = true;

  section

  products: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;

  shoppingList$: Observable<Item[]>;

  constructor(
 public navCtrl: NavController, 
 private shopping: ShoppingListService,
 private barcodeScanner: BarcodeScanner,
 private toast: ToastService,
 public dataService: DataServiceProvider,
 public platform: Platform,
 db: AngularFireDatabase) {



this.size$ = new BehaviorSubject(null);
    
this.items$ = this.size$.switchMap(size =>
      db.list('/shopping-list', ref =>
        size ? ref.orderByChild('upc').equalTo(size) : ref
      ).snapshotChanges()
    ); 

      let platforms = this.platform.platforms();

      this.platformList = platforms.join(', ');

      if (this.platform.is('core') || this.platform.is('mobileweb')) {
        this.isApp = false;
}

this.section = "one";

this.dataService.getProducts()
        .subscribe((response)=> {
            this.products = response
            console.log(this.products);
});


 


 this.shoppingList$ = this.shopping
				.getShoppingList() //DB List
				.snapshotChanges() //key and value
				.map(changes => {
				    return changes.map(c => ({
					key: c.payload.key, 
					...c.payload.val()
      			    }))
 				 }
			      )


                     } //end constructor


 filterBy(size: string|null) {

    this.size$.next(size);
  }

 scan() {
    this.selectedProduct = {};
    this.barcodeScanner.scan().then((barcodeData) => {
      this.selectedProduct = this.products.find(product => product.upc === barcodeData.text);
      if(this.selectedProduct !== undefined) {
this.toast.show(`Found`);
        this.productFound = true;
        alert(this.selectedProduct);
      } else {
       this.toast.show(`Not found`);
        this.selectedProduct = {};
        this.productFound = false;
      /*  this.toast.show('Product not found', '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        ); */
      }
    }, (err) => {

      this.toast.show(`Some error, probably in database item name`);
     /* this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      ); */
    });
}

} //end export class
