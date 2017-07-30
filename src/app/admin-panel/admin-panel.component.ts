import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ProductFetchingService } from "../product-fetching.service";
import { NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
  providers: [ProductFetchingService]
})
export class AdminPanelComponent implements OnInit {

  authenticated: boolean;
  adminAuthenticated = false;

  //Ng-Models
  item_type: string;
  item_title: string;
  item_description: string;
  item_price: string;
  item_url: string;
  item_imgurl: string;
  item_hotness = 0;
  item_author = "admin";

  errorMessageCreateItem = "";
  successMessageCreateItem = "";


  //Delete Products Rendered
  delete_type: any;

  deletedProducts = [];
  deletedProducts_normal = [];
  deletedProducts_selected = [];

  ngOnInit() {

  }

  normal: any;
  selected: any;

  items: FirebaseListObservable<any[]>;
  items_selected: FirebaseListObservable<any[]>;


  constructor(public firebaseAuth: AngularFireAuth, public db: AngularFireDatabase) {



    this.items = this.db.list('/items', {
      query: {
        orderByKey: true
      }
    });

    this.items_selected = this.db.list('/items-selected', {
      query: {
        orderByKey: true
      }
    });



    this.items.subscribe(fetchedItems => {
      this.deletedProducts_normal = fetchedItems.reverse();

      if (this.delete_type == undefined || this.delete_type == 'normal') {

        this.deletedProducts = this.deletedProducts_normal;
        console.log(fetchedItems);
      }

    });

    this.items_selected.subscribe(fetchedItems => {
      this.deletedProducts_selected = fetchedItems.reverse();

      if (this.delete_type == 'selected') {

        this.deletedProducts = this.deletedProducts_selected;
        console.log(fetchedItems);
      }

    });

    // if (this.delete_type == undefined || this.delete_type == 'normal') {
    //   this.deletedProducts = this.deletedProducts_normal;
    //   console.log("loading normal products --af");
    // }
    // else {
    //   this.deletedProducts = this.deletedProducts_selected;
    //   console.log("loading selected products --af");
    // }

    this.firebaseAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.authenticated = true;
        if (res.uid === 'PLaLEgwnilcftpsJmb93W19HX1o2') {
          this.adminAuthenticated = true;
        }
      } else {
        this.authenticated = false;
      }
    });

  }

  selectChanged() {
    console.log("change!");
    console.log(this.delete_type);
    if (this.delete_type == undefined || this.delete_type == 'normal') {
      console.log("loading normal products");
      this.deletedProducts = this.deletedProducts_normal;
    }
    else {
      this.deletedProducts = this.deletedProducts_selected;
    }
  }

  deleteItem(index) {
    // this.deletedProducts.splice(index, 1);

    if (this.delete_type == undefined || this.delete_type == 'normal') {
      this.items.remove(this.deletedProducts_normal[index].$key);
    }
    else {
      this.items_selected.remove(this.deletedProducts_selected[index].$key);
    }



  }

  addItem() {
    if (this.item_type == undefined) {
      this.errorMessageCreateItem = "Du musst den Typ des neuen Artikels wählen.";
      return;
    }
    if (this.item_title == undefined) {
      this.errorMessageCreateItem = "Du hast den Titel vergessen.";
      return;
    }
    if (this.item_description == undefined) {
      this.errorMessageCreateItem = "Du hast die Beschreibung Vergessen.";
      return;
    }
    if (this.item_price == undefined) {
      this.errorMessageCreateItem = "Du hast den Preis Vergessen.";
      return;
    }
    if (this.item_url == undefined) {
      this.errorMessageCreateItem = "Du hast die URL vergessen.";
      return;
    }
    if (this.item_imgurl == undefined) {
      this.errorMessageCreateItem = "Du hast die Bild URL vergessen.";
      return;
    }
    if (this.item_imgurl == undefined) {
      this.errorMessageCreateItem = "Du hast die Bild URL vergessen.";
      return;
    }
    if (this.item_hotness == undefined) {
      this.errorMessageCreateItem = "Du musst die 'Hotness' auf 0 setzen.";
      return;
    }
    if (this.item_author == undefined) {
      this.errorMessageCreateItem = "Du musst den 'Author' angeben. (admin)";
      return;
    }

    //Form Validated -> Create Item

    var newItemObj = {
      author: this.item_author,
      description: this.item_description,
      hotness: this.item_hotness,
      imgURL: this.item_imgurl,
      price: this.item_price,
      title: this.item_title,
      url: this.item_url
    };

    // this.deletedProducts.unshift(newItemObj);

    this.errorMessageCreateItem = "";

    console.log(this.item_type);

    if (this.item_type == 'selected') {
      this.items_selected.push(newItemObj);
      this.successMessageCreateItem = "Artikel hinzugefügt!";
    }

    if (this.item_type == 'normal') {
      this.items.push(newItemObj);
      this.successMessageCreateItem = "Artikel hinzugefügt!";
    }

  }


}
