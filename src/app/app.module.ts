import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from "@angular/router";

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdTabsModule, MdIconModule } from '@angular/material';
import { HotComponent } from './hot/hot.component';
import { NewComponent } from './new/new.component';
import { SelectedComponent } from './selected/selected.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { BsDropdownModule } from 'ngx-bootstrap';

const appRoutes: Routes = [
  { path: 'hot',          component:  HotComponent},
  { path: 'new',          component:  NewComponent },
  { path: 'selected',     component:  SelectedComponent },
  { path: '**',           component:  HotComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HotComponent,
    NewComponent,
    SelectedComponent
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
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
