
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Item } from './../../models/item/item.model';


@Injectable()
export class ShoppingListService {

  
  private shoppingListRef = this.db.list<Item>('shopping-list');
  private locationsRef = this.db.list<Item>('locations');
  private poRef = this.db.list<Item>('purchase-order');
  private reRef = this.db.list<Item>('re-orders');


  labs: FirebaseListObservable<any>;
  customers: FirebaseListObservable<any>;

  
constructor(private db: AngularFireDatabase) {
//db.list('locations', ref => ref.limitToLast(3));
}


getShoppingList() {
 return this.shoppingListRef;
}

getPOList() {
 return this.poRef;
}

getReordersList() {
 return this.reRef;
}

getLocationsList() {
 //return this.locationsRef;

//below works
//return this.db.list('locations', ref => ref.limitToLast(3)); 

  return this.db.list('locations', ref => ref.orderByChild("name")); 
}


addItem(item: Item) {
 return this.shoppingListRef.push(item);
}

addItem2(item: Item) {
 return this.locationsRef.push(item);
}


editItem(item: Item) {
 return this.shoppingListRef.update(item.key, item);
}

removeItem(item: Item) {
 return this.shoppingListRef.remove(item.key);
}

}