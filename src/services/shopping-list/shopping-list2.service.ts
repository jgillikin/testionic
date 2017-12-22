
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Item } from './../../models/location/item.model';


@Injectable()
export class ShoppingListService2 {

  
  private shoppingListRef = this.db.list<Item>('shopping-list');
  private locationsRef = this.db.list<Item>('locations');

  labs: FirebaseListObservable<any>;
  customers: FirebaseListObservable<any>;

  
constructor(private db: AngularFireDatabase) {}


getShoppingList() {
 return this.shoppingListRef;
}

getLocationsList() {
 return this.locationsRef;
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
 return this.locationsRef.remove(item.key);
}

}