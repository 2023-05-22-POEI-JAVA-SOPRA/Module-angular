import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './errors/pages/page-not-found/page-not-found.component';
import { PageAddOrderComponent } from './orders/pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './orders/pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  // 1 - redirection
  // associer une route à une autre route
  // '', il va aller sur la route 'orders'
  { path: '', redirectTo: '/orders', pathMatch: 'full' },

  // 2 - route orders , on va lui associer un module
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  // ajouter le module en lazy loading
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  // dans le module Errors, ajouter le fichier de routing
  // vérifier dans Network le chargement du module
  {
    path: '**',
    loadChildren: () =>
      import('./errors/errors.module').then((m) => m.ErrorsModule),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// { path: '', component: PageListOrdersComponent },
// { path: 'add', component: PageAddOrderComponent },
// { path: 'edit', component: PageEditOrderComponent },

// // WILDCARD ROUTE
// // on crée un module + un composant PageNotFound
// { path: '**', component: PageNotFoundComponent },
