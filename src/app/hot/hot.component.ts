import { Component, OnInit } from '@angular/core';
import { ProductFetchingService } from "../product-fetching.service";
import { NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.scss'],
  providers: [ProductFetchingService]
})
export class HotComponent implements OnInit {

  hotProducts = [];


  constructor(public productFetching: ProductFetchingService) { }

  ngOnInit() {

    this.productFetching.fetchHot(1, result => {
      this.hotProducts = this.hotProducts.concat(result).reverse();

      console.log(this.hotProducts);
    });

  }

}
