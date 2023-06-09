import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module';
import { HomeComponent } from './home/home.component';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    SiteFrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
