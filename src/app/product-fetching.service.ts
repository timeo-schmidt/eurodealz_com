import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/take';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ProductFetchingService {
  fbHot: Observable<any[]>;
  fbNew: Observable<any[]>;
  fbSelected: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {

  }


  fetchHot(moreItemInterval, callback) {
    var lastVars = moreItemInterval * 30;

    //Fetch Data
    this.fbHot = this.db.list("/items", {
      query: {
        orderByChild: 'hotness',
        limitToFirst: lastVars
      }
    }).take(1);

    //Subscribe to Fetched Data
    this.fbHot.subscribe(fetchedItems => {
      console.log("new HOT items fetched: ");
      callback(fetchedItems);
    });

  }

  fetchNew(moreItemInterval, callback) {
    var lastVars = moreItemInterval * 30;

    //Fetch Data
    this.fbHot = this.db.list("/items", {
      query: {
        limitToFirst: lastVars
      }
    }).take(1);

    //Subscribe to Fetched Data
    this.fbHot.subscribe(fetchedItems => {
      console.log("new NEW items fetched: ");
      callback(fetchedItems);
    });

  }

  fetchSelected(moreItemInterval, callback) {
    var lastVars = moreItemInterval * 30;

    //Fetch Data
    this.fbHot = this.db.list("/items-selected", {
      query: {
        limitToFirst: lastVars
      }
    }).take(1);

    //Subscribe to Fetched Data
    this.fbHot.subscribe(fetchedItems => {
      console.log("new SELECTED items fetched: ");
      callback(fetchedItems);
    });

  }

  title() {
    return "This is the awesome title!";
  }
}
