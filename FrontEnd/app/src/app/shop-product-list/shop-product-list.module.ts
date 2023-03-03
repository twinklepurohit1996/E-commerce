import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopProductListRoutingModule } from './shop-product-list-routing.module';
import { ShopProductCardComponent } from './shop-product-card/shop-product-card.component';
import { ShopProductDetailsComponent } from './shop-product-details/shop-product-details.component';


@NgModule({
  declarations: [
    ShopProductCardComponent,
    ShopProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ShopProductListRoutingModule
  ]
})
export class ShopProductListModule { }
