import { Component } from '@angular/core';
import { MdTabsModule, MdIconModule } from '@angular/material';
import { RouterModule } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public singleModel: string = '1';


  selectedActive = false;
  hotActive = false;
  newActive = false;
  routenow: any;

  
  ngOnInit() {
    console.log(location.pathname);
    this.routenow = location.pathname;

    if (this.routenow == '/selected') {
      this.selectedActive  = true;
    }
    if (this.routenow == '/hot') {
      this.hotActive  = true;
    }
    if (this.routenow == '/new') {
      this.newActive  = true;
    }
  }

  new() {
    this.selectedActive = false;
    this.hotActive = false;
    this.newActive = true;
  }
  hot() {
    this.selectedActive = false;
    this.hotActive = true;
    this.newActive = false;
  }
  selected() {
    this.selectedActive = true;
    this.hotActive = false;
    this.newActive = false;
  }

}
