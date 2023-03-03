import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './home/feature/feature.component';
import { OfferComponent } from './home/offer/offer.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { SubscribeComponent } from './home/subscribe/subscribe.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopProductListComponent } from './shop-product-list/shop-product-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { ReactiveFormsModule } from '@angular/forms';

import { ShopProductListModule } from './shop-product-list/shop-product-list.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FeatureComponent,
    OfferComponent,
    CategoriesComponent,
    SubscribeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ShopProductListComponent,
    NavbarComponent,
    CartComponent,
    CheckoutComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
