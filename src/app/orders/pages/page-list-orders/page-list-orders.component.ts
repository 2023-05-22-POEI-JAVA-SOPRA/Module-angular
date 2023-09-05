import { Component } from '@angular/core';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  // notre objectif : déclencher sumUp et afficher le résultat dans la console.
  constructor(private ordersService: OrdersService) {
    console.log(this.ordersService.sumUp(1, 2));
  }
}
