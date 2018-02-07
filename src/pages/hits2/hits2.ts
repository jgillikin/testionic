import { Component, OnInit } from '@angular/core';
import { connectHits } from 'instantsearch.js/es/connectors';
import { connectSearchBox } from 'instantsearch.js/es/connectors';
import { InstantSearchService } from '../../services/instantsearch.service';
import { NavController, Platform,NavParams } from 'ionic-angular';
import { HomeaddPage } from '../homeadd/homeadd';
import {Http, Request, RequestMethod, Headers} from "@angular/http";

@Component({
  selector: 'hits2',
  templateUrl: 'hits2.html'
})
export class Hits2Component implements OnInit {
  // Define how your component state will look like,
  // and intialize it with an empty hits array
  state: { hits: {}[] } = { hits: [] };
  public prevAveragesList: Array<any>; 
  emailS: any; 
  http: Http;

  constructor(private instantSearchService: InstantSearchService,
public navCtrl: NavController,public params: NavParams,http: Http) {

this.http = http;
this.emailS = this.params.get('emailS');

if (this.params.get('ordersPassed') === undefined) {
//alert("undefined");
 console.log('undefined');
}
else {
//alert("not undefined");
 this.prevAveragesList = this.params.get('ordersPassed');
}

} //end constructor

  ngOnInit() {

    // Create a widget which will call `this.updateState` whenever
    // something changes on the search state itself
    const widget = connectHits(this.updateState);

    // Register the Hits widget into the instantSearchService search instance.
    this.instantSearchService.search.addWidget(widget());
  }

  updateState = (state, isFirstRendering) => {
    // asynchronous update of the state
    // avoid `ExpressionChangedAfterItHasBeenCheckedError`
    if (isFirstRendering) {
      return Promise.resolve().then(() => {
        this.state = state;
      });
    }

    this.state = state;
  }

onClick(val: string|null, desc: string|null, qty: number, key1: string) {
//alert("in onClick, key is "+key1);

this.navCtrl.push(HomeaddPage, {
    firstPassed: val,
    secondPassed: desc,
    thirdPassed: qty,
    fourthPassed: this.prevAveragesList,
    fifthPassed: key1,
    emailS: this.emailS
   })


}

}
