import { Component, OnInit } from '@angular/core';
import { ProductFetchingService } from "../product-fetching.service";
import { NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss'],
  providers: [ProductFetchingService]
})
export class SelectedComponent implements OnInit {

  selectedProducts = [];


  constructor(public productFetching: ProductFetchingService) { }

  ngOnInit() {

    this.productFetching.fetchSelected(1, result => {
      this.selectedProducts = this.selectedProducts.concat(result).reverse();
      console.log(this.selectedProducts);
    });

  }


}
