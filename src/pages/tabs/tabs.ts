import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { IrreportsPage } from '../irreports/irreports';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  //tab2Root = IrreportsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
