import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CustselectPage } from '../custselect/custselect';
import { IrreportsPage } from '../irreports/irreports';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CustselectPage;
  tab2Root = AboutPage;
  //tab2Root = IrreportsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
