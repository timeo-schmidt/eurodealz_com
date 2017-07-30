import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from "@angular/router";

import { AppComponent } from './app.component';

import { ProductFetchingService } from "./product-fetching.service";


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdTabsModule, MdIconModule } from '@angular/material';
import { HotComponent } from './hot/hot.component';
import { NewComponent } from './new/new.component';
import { SelectedComponent } from './selected/selected.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap';


// Importing AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';



// AF2 Settings
const firebaseConfig = {
  apiKey: "AIzaSyC-D0Wiqmnt3zmgdGwpIVWgAwaVXUBRpkk",
  authDomain: "eurodealz-2973e.firebaseapp.com",
  databaseURL: "https://eurodealz-2973e.firebaseio.com",
  storageBucket: "eurodealz-2973e.appspot.com",
  messagingSenderId: "957068896940"
};


const appRoutes: Routes = [

  { path: 'hot', component: HotComponent },
  { path: 'new', component: NewComponent },
  { path: 'selected', component: SelectedComponent },
  { path: 'login', component: LoginAndRegisterComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: '**', component: HotComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HotComponent,
    NewComponent,
    SelectedComponent,
    LoginAndRegisterComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    AngularFireDatabase,
    ProductFetchingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
