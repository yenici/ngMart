import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyDwbFHEZGdhZXnvDLf1tBp4bNEs1H14shs',
  authDomain: 'ngmart-14ea7.firebaseapp.com',
  databaseURL: 'https://ngmart-14ea7.firebaseio.com',
  projectId: 'ngmart-14ea7',
  storageBucket: 'ngmart-14ea7.appspot.com',
  messagingSenderId: '970703252663'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
