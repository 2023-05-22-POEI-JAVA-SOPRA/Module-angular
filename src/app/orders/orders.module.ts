import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { DemoObservableComponent } from './pages/demo-observable/demo-observable.component';



@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent,
    DemoObservableComponent
  ],
  imports: [
    OrdersRoutingModule,
    CommonModule
  ]
})
export class OrdersModule { }
