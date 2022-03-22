import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCB0VLqFBEIOEdJeyV38Vt4icz9bCvS35s",
      authDomain: "test-suite-b9105.firebaseapp.com",
      projectId: "test-suite-b9105",
      storageBucket: "test-suite-b9105.appspot.com",
      messagingSenderId: "759242664866",
      appId: "1:759242664866:web:7ad817f44a3fddbb5520fb",
      measurementId: "G-9XFXWQ40DW"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
