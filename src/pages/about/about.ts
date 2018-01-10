import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController, Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Item } from './../../models/item/item.model';
import { IrreportsPage } from '../irreports/irreports';
import { CurrInvReportPage } from '../currinvreport/currinvreport';
import { POReportPage } from '../poreport/poreport';
import { InventoryPage } from '../inventory/inventory';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AddLocationPage } from '../addlocation/addlocation';
import { ToastService } from './../../services/toast/toast.service';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  platformList: string = '';
  isApp: boolean = true;
  csv: string

item: Item = {
 item: '',
 upc: 0,
 desc: '',
 location: '',
 quantity: 0,
 lot: ''
}; 


pushPage: any;

section
groceries

shoppingList$: Observable<Item[]>;

constructor(public navCtrl: NavController, 
private shopping: ShoppingListService,
public platform: Platform, private toast: ToastService,
public afA: AngularFireAuth) {

this.pushPage = AddLocationPage;

this.section = "one";

let platforms = this.platform.platforms();

        this.platformList = platforms.join(', ');

     if (this.platform.is('core') ||                	     	this.platform.is('mobileweb')) {
     this.isApp = false;
      }


  this.groceries = [
            'Current Inventory Report',
            'Purchase Order Report'
        ];


this.shoppingList$ = this.shopping
				.getLocationsList() //DB List
				.snapshotChanges() //key and value
				.map(changes => {
				    return changes.map(c => ({
					key: c.payload.key, 
					...c.payload.val()
      			    }))
 				 });
			      


  } //end constructor

logout(){
//alert("in logout");
    this.afA.auth.signOut().then(() => {
       this.navCtrl.push(LoginPage);
    })
}

goReport(rep) {
//alert(rep);
if (rep === 'Current Inventory Report')
 this.navCtrl.push(CurrInvReportPage);
else
 this.navCtrl.push(POReportPage);


}

  page1: any = IrreportsPage;
  page2: any = InventoryPage;

  
  changeListener(files: FileList){
  console.log(files);
  var str_array;
  var lines;
  var ind;

  if(files && files.length > 0) {
     let file : File = files.item(0); 
       console.log(file.name);
       console.log(file.size);
       console.log(file.type);
       let reader: FileReader = new FileReader();
       reader.readAsText(file);
       reader.onload = (e) => {
          //let csv: string = reader.result;
          let csv = reader.result;
          
          var rows = csv.split("\n");

          //skip header row by starting with i =1 below
          for (var i = 1; i< rows.length; i++) {
            var cells = rows[i].split(",");
      
            for (var j=0; j<cells.length; j++) {
            // alert("element number "+j+" and i is "+i+" with value "+cells[j]);

  if (j==5) {
        this.item.item = cells[0];
        this.item.upc = cells[1];
        this.item.desc = cells[2];
        this.item.location = cells[3];
        this.item.quantity = cells[4];
        this.item.lot = cells[5];


      this.shopping.addItem(this.item).then(ref => {
      //this.toast.show(`File added!`);
      //this.navCtrl.setRoot(AboutPage, { key: ref.key });
   });  
    }
 
            }
          }
         this.toast.show(`File added!`);
         // alert(csv);
       }
    }
}

}
