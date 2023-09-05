import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoObservableComponent } from './pages/demo-observable/demo-observable.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  // orders/
  { path: '', component: PageListOrdersComponent },
  { path: 'add', component: PageAddOrderComponent },
  { path: 'edit', component: PageEditOrderComponent },
  { path: 'obs', component: DemoObservableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}

// ajouter les routes
// Attention, il est déjà sur la route /orders
// ne pas oublier d'importer ce fichier dans ordersModule
