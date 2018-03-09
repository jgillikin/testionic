import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { AngularFireDatabase, AngularFireAction,AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-pograph',
  templateUrl: 'pograph.html'
})
export class PographPage {
 
    @ViewChild('barCanvas') barCanvas;
 
    barChart: any;
    public descRef: firebase.database.Reference;
    public descQty:Array<any>;
    jan: any = 0;
    feb: any = 0;
    mar: any = 0;
    apr: any = 0;
    may: any = 0;
    jun: any = 0;
    jul: any = 0;
    aug: any = 0;
    sep: any = 0;
    oct: any = 0;
    nov: any = 0;
    dec: any = 0;
    currentTime: any;
    year: any;
 
    constructor(public navCtrl: NavController,public db: AngularFireDatabase) {
 
    this.currentTime = new Date();
    this.year = this.currentTime.getFullYear();

/*    this.jan=6;
    this.feb=8;
    this.mar=10;*/

this.descRef = firebase.database().ref('/purchase-order');

this.descRef.on('value', descList => {
  let descs = [];
  let janQty = 0;
  let febQty = 0;
  let marQty = 0;
  let aprQty = 0;
  let mayQty = 0;
  let junQty = 0;
  let julQty = 0;
  let augQty = 0;
  let sepQty = 0;
  let octQty = 0;
  let novQty = 0;
  let decQty = 0;

  var weeklyData = {};
  descList.forEach( desc => {

    weeklyData["record"] = desc.val();

    if (weeklyData["record"].dateOrdered.substring(0,2) == '01' && weeklyData["record"].dateOrdered.substring(6) == this.year)
     janQty = Number(janQty)+1; //+ Number(weeklyData["record"].qtyO);
    else if (weeklyData["record"].dateOrdered.substring(0,2) == '02' && weeklyData["record"].dateOrdered.substring(6) == this.year)
     febQty = Number(febQty)+1; // + Number(weeklyData["record"].qtyO);
    else if (weeklyData["record"].dateOrdered.substring(0,2) == '03' && weeklyData["record"].dateOrdered.substring(6) == this.year)
     marQty = Number(marQty)+1; // + Number(weeklyData["record"].qtyO);
    else if (weeklyData["record"].dateOrdered.substring(0,2) == '04' && weeklyData["record"].dateOrdered.substring(6) == this.year)
     aprQty = Number(aprQty)+1; // + Number(weeklyData["record"].qtyO);
    else if (weeklyData["record"].dateOrdered.substring(0,2) == '05' && weeklyData["record"].dateOrdered.substring(6) == this.year)
     mayQty = Number(mayQty)+1; // + Number(weeklyData["record"].qtyO);
    else if (weeklyData["record"].dateOrdered.substring(0,2) == '06' && weeklyData["record"].dateOrdered.substring(6) == this.year)
     junQty = Number(junQty)+1; // + Number(weeklyData["record"].qtyO);
    else if (weeklyData["record"].dateOrdered.substring(0,2) == '07' && weeklyData["record"].dateOrdered.substring(6) == this.year)
     julQty = Number(julQty)+1; // + Number(weeklyData["record"].qtyO);
    else if (weeklyData["record"].dateOrdered.substring(0,2) == '08' && weeklyData["record"].dateOrdered.substring(6) == this.year)
     augQty = Number(augQty)+1; // + Number(weeklyData["record"].qtyO);
    else if (weeklyData["record"].dateOrdered.substring(0,2) == '09' && weeklyData["record"].dateOrdered.substring(6) == this.year)
     sepQty = Number(sepQty)+1; // + Number(weeklyData["record"].qtyO);
    else if (weeklyData["record"].dateOrdered.substring(0,2) == '10' && weeklyData["record"].dateOrdered.substring(6) == this.year)
     octQty = Number(octQty)+1; // + Number(weeklyData["record"].qtyO);
    else if (weeklyData["record"].dateOrdered.substring(0,2) == '11' && weeklyData["record"].dateOrdered.substring(6) == this.year)
     novQty = Number(novQty)+1; // + Number(weeklyData["record"].qtyO);
    else if (weeklyData["record"].dateOrdered.substring(0,2) == '12' && weeklyData["record"].dateOrdered.substring(6) == this.year)
     decQty = Number(decQty)+1; // + Number(weeklyData["record"].qtyO);


//    descs.push(desc.val());
    return false;
  });

  this.jan = janQty;
  this.feb = febQty;
  this.mar = marQty;
  this.apr = aprQty;
  this.may = mayQty;
  this.jun = junQty;
  this.jul = julQty;
  this.aug = augQty;
  this.sep = sepQty;
  this.oct = octQty;
  this.nov = novQty;
  this.dec = decQty;
});



    } //end constructor
 
    ionViewDidEnter() {

   // alert("janQty is "+this.jan);

        this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                datasets: [{
                    label: '# of Purchase Orders '+this.year,
                    //data: [12, 19, 3, 5, 2, 3],
                    data: [this.jan,this.feb,this.mar,this.apr,this.may,this.jun,this.jul,this.aug,this.sep,this.oct,this.nov,this.dec],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });

}

}