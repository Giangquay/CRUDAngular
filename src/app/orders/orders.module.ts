import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrdersComponent } from './list-orders/list-orders.component';



@NgModule({
  declarations: [
    ListOrdersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListOrdersComponent // cho phep ben ngoai su dung <app-list-orders></app-list-orders>
  ]
})
export class OrdersModule { }
