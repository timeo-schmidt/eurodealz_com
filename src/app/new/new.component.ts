import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';

import { ProductFetchingService } from "../product-fetching.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  providers: [ProductFetchingService]
})
export class NewComponent implements OnInit {

    newProducts = [];


    constructor(public productFetching: ProductFetchingService) { }

    ngOnInit() {

      this.productFetching.fetchNew(1, result => {
        this.newProducts = this.newProducts.concat(result);

        console.log(this.newProducts);
      });

    }




}
