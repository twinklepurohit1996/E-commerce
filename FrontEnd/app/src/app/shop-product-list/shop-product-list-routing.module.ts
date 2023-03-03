import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopProductDetailsComponent } from './shop-product-details/shop-product-details.component';
import { ShopProductListComponent } from './shop-product-list.component';
const routes: Routes = [
  {path:'',component:ShopProductListComponent},
  {path:"product-details",component:ShopProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopProductListRoutingModule { }
