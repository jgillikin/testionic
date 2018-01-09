import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { ToastService } from '../../services/toast/toast.service';
import { Component } from '@angular/core';
//import { HTTP } from '@ionic-native/http';
import {Http, Request, RequestMethod, Headers} from "@angular/http";
import { NavController, Platform, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Observable } from 'rxjs/Observable';
import { Item } from './../../models/item/item.model';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { AngularFireDatabase, AngularFireAction,AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-homeadd',
  templateUrl: 'homeadd.html'
})
export class HomeaddPage {
    http: Http;
    mailgunUrl: string;
    mailgunApiKey: string;
    data: any = {};

   //items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  items$: any;
  size$: BehaviorSubject<string|null>;
  
  platformList: string = '';
  isApp: boolean = true;

  section

  products: any[] = [];
  products2: any[] = [];
  sendProduct: any;

  selectedProduct: any;
  productFound:boolean = false;

  shoppingList$: Observable<Item[]>;
  hideMe=false;

  public descList:Array<any>;
  public descRef: firebase.database.Reference;
  public loadedDescList: Array<any>;
  public upc: any
  public desc: any
  public qty: any
  public key1: any
  public qtyOrder: any
  public averagesList: Array<any> = [];
  public prevAveragesList: Array<any> = [];
  public shoppingList2: firebase.database.Reference;
  public purchaseOrder: firebase.database.Reference;
  public userId;
  po: AngularFireList<any> = this.db.list('/purchase-order');

  constructor(
 public navCtrl: NavController, 
 private shopping: ShoppingListService,
 private barcodeScanner: BarcodeScanner,
 private toast: ToastService,
 public dataService: DataServiceProvider,
 public platform: Platform,
 public db: AngularFireDatabase, 
 public params: NavParams,
 http: Http
) {

        this.http = http;
        this.mailgunUrl = "sandbox80eb3a7b4f8b4dc99d29fd49dc624be4.mailgun.org";
        this.mailgunApiKey = window.btoa("api:key-e6e1c7eddb02bfed1b4cc1a1f5a10ac5");
        

this.upc = this.params.get('firstPassed');
this.desc = this.params.get('secondPassed');
this.qty = this.params.get('thirdPassed');
this.key1 = this.params.get('fifthPassed');

//alert("passed in key1 is "+this.key1);

if (this.params.get('fourthPassed') === undefined) {
//alert("undefined");
 console.log('undefined');
}
else {
//alert("not undefined");
 this.prevAveragesList = this.params.get('fourthPassed');
}


this.size$ = new BehaviorSubject(null);
    

this.items$ = this.size$.switchMap(size =>
      db.list('/shopping-list', ref =>
        size ? ref.orderByChild('upc').equalTo(size) : ref
      ).snapshotChanges()
    );


this.descRef = firebase.database().ref('/shopping-list');

this.descRef.on('value', descList => {
  let descs = [];
  descList.forEach( desc => {
    descs.push(desc.val());
    return false;
  });

  this.descList = descs;
  this.loadedDescList = descs;
});



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

ionViewDidLoad() {
this.userId = firebase.auth().currentUser.uid;
}


onClickSend(qO: any, qC: any, upc: any, keyU: any) {

//alert("qC is "+qC+" and qO is "+qO+" and upc is "+upc);


if (!qO) {
alert("Please enter a Quantity to order");
return false;
}


if (Number(qO) > Number(qC)) {
alert("Your order quantity is more than the onhand quantity");
return false;
}
else {

if (this.prevAveragesList === undefined) {
 this.averagesList.push(upc+' '+qO+' '+keyU);
 this.navCtrl.push(HomePage, {
    ordersPassed: this.averagesList
   })

}
else {
  this.prevAveragesList.push(upc+' '+qO+':'+qC+' '+keyU);
this.navCtrl.push(HomePage, {
    ordersPassed: this.prevAveragesList
   })

}


} //end else

}

sendOrder(qO: any, qC: any, upc: any, keyU2: any) {

//alert("qC is "+qC+" and qO is "+qO+" and upc is "+upc);

//alert("in sendOrder received keyU2 of "+keyU2);

if (Number(qO) > Number(qC)) {
alert("Your order quantity is more than the onhand quantity");
return false;
}
else {

var link='https://jasongillikin.000webhostapp.com/sendmail.php';
var myData;
var message;

let newQty:any;

let today:any = new Date();
let dd:any = today.getDate();
let mm:any = today.getMonth()+1; //January is 0!

let yyyy:any = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
today = mm+'/'+dd+'/'+yyyy;

if (this.prevAveragesList === undefined) {
//insert from this.averagesList array
this.averagesList.push(upc+' '+qO+':'+qC+' '+this.key1);

 for(let data of this.averagesList) {
 // alert(data.substr(data.lastIndexOf(' '))); //key

//alert(data);

//alert(data.substring(data.indexOf(' ')+1,data.lastIndexOf(':'))); //q0 qty

//alert(data.substring(data.lastIndexOf(':')+1,data.lastIndexOf(' ')));  //qC qty

newQty = data.substring(data.lastIndexOf(':')+1,data.lastIndexOf(' ')) - data.substring(data.indexOf(' ')+1,data.lastIndexOf(':'));

this.shoppingList2 = firebase.database().ref("shopping-list/"+data.substr(data.lastIndexOf(' ')).trim());

this.shoppingList2.update ({
 "quantity": newQty
});

this.po.push({
 "qtyO": data.substring(data.indexOf(' ')+1,data.lastIndexOf(':')).trim(),
 "qtyC": data.substring(data.lastIndexOf(':')+1,data.lastIndexOf(' ')).trim(),
 "prodId": data.substr(data.lastIndexOf(' ')).trim(),
 "dateOrdered": today,
 "orderedBy": this.userId

}); 

if (this.sendProduct)
 this.sendProduct = this.sendProduct+'\n'+'UPC:  '+data.substring(1,data.indexOf(' '))+' Qty Ordered =  '+data.substring(data.indexOf(' ')+1,data.lastIndexOf(':')).trim();
else
 this.sendProduct = 'UPC: '+data.substring(1,data.indexOf(' '))+' Qty Ordered= '+data.substring(data.indexOf(' ')+1,data.lastIndexOf(':')).trim();


 } //end for

this.averagesList = [];
this.navCtrl.push(HomePage, {
    ordersPassed: this.averagesList
   })

//send email
//myData = JSON.stringify({username: "sendBodyMessage"});
myData = JSON.stringify({username: this.sendProduct});

this.http.post(link,myData)
.subscribe(data => { 
this.data.response = "OK";
}, error => {
console.log("oops");
});


}
else {
//insert from this.prevAveragesList
  this.prevAveragesList.push(upc+' '+qO+':'+qC+' '+this.key1);


 for(let data of this.prevAveragesList) {
//  alert(data.substr(data.lastIndexOf(' '))); //key
//alert(data);

//alert(data.substring(data.indexOf(' ')+1,data.lastIndexOf(':'))); //q0 qty

//alert(data.substring(data.lastIndexOf(':')+1,data.lastIndexOf(' ')));  //qC qty

newQty = data.substring(data.lastIndexOf(':')+1,data.lastIndexOf(' ')) - data.substring(data.indexOf(' ')+1,data.lastIndexOf(':'));


this.shoppingList2 = firebase.database().ref("shopping-list/"+data.substr(data.lastIndexOf(' ')).trim());
this.shoppingList2.update ({
 "quantity": newQty
});

this.po.push({
 "qtyO": data.substring(data.indexOf(' ')+1,data.lastIndexOf(':')).trim(),
 "qtyC": data.substring(data.lastIndexOf(':')+1,data.lastIndexOf(' ')).trim(),
 "prodId": data.substr(data.lastIndexOf(' ')).trim(),
 "dateOrdered": today,
 "orderedBy": this.userId

}); 

if (this.sendProduct)
 this.sendProduct = this.sendProduct+'\n'+'UPC:  '+data.substring(1,data.indexOf(' '))+' Qty Ordered =  '+data.substring(data.indexOf(' ')+1,data.lastIndexOf(':')).trim();
else
 this.sendProduct = 'UPC:  '+data.substring(1,data.indexOf(' '))+' Qty Ordered = '+data.substring(data.indexOf(' ')+1,data.lastIndexOf(':')).trim();

 } //end for


this.prevAveragesList = [];
this.navCtrl.push(HomePage, {
    ordersPassed: this.prevAveragesList
   })
}


//send email
myData = JSON.stringify({username: this.sendProduct});

this.http.post(link,myData)
.subscribe(data => { 
this.data.response = "OK";
}, error => {
console.log("oops");
});


} //end else

}

  
onBlur(qO: any, qC: any) {
//alert("in onBlur and order qty is "+qO+ "and onhand qty is "+qC);

if (Number(qO) > Number(qC)) {
alert("Your order quantity is more than the onhand quantity");
return false;
}
else
 return true;

}


 filterBy(size: string|null) {

if(size)
 this.hideMe = true;
else
 this.hideMe = false;

 this.size$.next(size);

  }

initializeItems() {
  this.descList = this.loadedDescList;
}


getItems(searchbar) {
//alert(searchbar);
  // Reset items back to all of the items
  this.initializeItems();

  // set q to the value of the searchbar
  var q = searchbar;


  // if the value is an empty string don't filter the items
  if (!q) {
    this.hideMe = false;
    return;
  }

  this.descList = this.descList.filter((v) => {
    if(v.desc && q) {
      if (v.desc.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });

if (this.descList.length > 0)
 this.hideMe = true;

if (!searchbar)
 this.hideMe = false;

//  alert(this.descList.length);

}


scan() {
    let descs = [];
    this.selectedProduct = {};
    var weeklyData = {};
   
/*    this.barcodeScanner.scan().then((barcodeData) => {
      this.selectedProduct = this.products.find(product => product.upc === barcodeData.text);*/

this.barcodeScanner.scan().then((barcodeData) => {


  var q = barcodeData.text;
  
  this.descList = this.descList.filter((v) => {
    if(v.upc && q) {
      if (v.upc.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        weeklyData["id"] = v.id;
        weeklyData["record"] = v.upc;
        descs.push(weeklyData);
        return true;
      }
  //    return false; 
console.log('scan');
    }
  });

this.descList = [];
this.descList = descs;

if (this.descList.length > 0)
 this.hideMe = true;

this.selectedProduct = this.descList;


      if(this.selectedProduct !== undefined || this.selectedProduct.length > 0) {
this.toast.show(`Found`);
        this.productFound = false;
        console.log(this.selectedProduct);
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


} //end scan

} //end export class
