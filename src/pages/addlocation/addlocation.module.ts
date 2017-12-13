import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddLocationPage } from './addlocation';

@NgModule({
  declarations: [
    AddLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(AddLocationPage),
  ],
})
export class AddLocationPageModule {}
