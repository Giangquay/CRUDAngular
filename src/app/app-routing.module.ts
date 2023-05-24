import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  // Noi import router 
  {
    path:'orders',component:ListOrdersComponent
  },
  {
    path:'home',component:HomeComponent
  },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
