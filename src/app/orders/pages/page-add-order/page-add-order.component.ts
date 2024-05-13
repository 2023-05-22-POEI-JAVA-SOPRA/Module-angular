import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent {
  // création d'un nouvel objet de type Order
  public init: Order = new Order();

  // ajouter le service pour accéder à la méthode add()
  // ici Router permet les redirections
  constructor(private ordersService: OrdersService, private router: Router) {
    console.log('test');

  }

  public onAdd(obj: Order) {
    // console.log(obj, 'depuis page add order');
    // faire un appel http en méthode post avec obj
    this.ordersService.add(obj).subscribe((data) => {
      // redirection
      this.router.navigate(['']);
    });

    // Redirection écrite ici trop tôt !
  }
}

// ajouter des validations
