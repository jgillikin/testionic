import { Component,AfterViewInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import firebase from 'firebase'
//import { TabsPage } from '../pages/tabs/tabs';
//import { LoginPage } from '../pages/login/login';
import { InstantSearchService } from '../services/instantsearch.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp implements AfterViewInit {
  rootPage: string = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private instantSearchService: InstantSearchService) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

    ngAfterViewInit() {
    this.instantSearchService.search.start();
  }

}

