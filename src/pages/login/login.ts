import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from './../../models/user/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireAction,AngularFireList } from 'angularfire2/database';
import { ResetpwdPage } from '../resetpwd/resetpwd';
import {App} from 'ionic-angular';
import * as firebase from 'firebase/app';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  us: AngularFireList<any> = this.db.list('/users-list');


  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public db: AngularFireDatabase, public navParams: NavParams) {

   try {
    if (firebase.auth().currentUser.uid != null) {
     alert(firebase.auth().currentUser.uid);
     this.navCtrl.setRoot(TabsPage);    
    }
   }
   catch(e) {
     console.log('not logged in');
   }

  }
 
  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(TabsPage);
      }  
    }
    catch (e) {
      console.error(e);
    }
  }

 resetPwd(){
    this.navCtrl.push(ResetpwdPage);
  }
 
  async register(user: User) {

 return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((user) => {
       
        this.us.push({
 "email": user.email,
 "uid": user.uid
}); 
this.navCtrl.setRoot(TabsPage);
//this.navCtrl.parent.parent.setRoot(TabsPage);
      })
.catch((error) => this.handleError(error) );

  /*  try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        

        this.navCtrl.setRoot(TabsPage);
      }
    } catch (e) {
      console.error(e);
    } */

  }

// If error, console log and notify user
  private handleError(error: Error) {
    console.error(error);
    //this.notify.update(error.message, 'error');
  }

}