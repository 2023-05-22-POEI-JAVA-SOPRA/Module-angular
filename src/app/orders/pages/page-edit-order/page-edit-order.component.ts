import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent {
  /*
    extraire l'id de l'url
    appel au service
    méthode pour retrouver objet à partir de id
    on passe l'objet à app-form-order
  */
  public init!: Order;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(typeof id);
    // console.log(id);
    if (id) {
      this.ordersService.getItemById(id).subscribe((data) => {
        // on place data dans la propriété this.init
        // car data est inaccessible depuis le template html
        this.init = data;
        console.log(this.init);
      });
    }
  }

  public onEdit(obj: Order) {
    console.log(obj);
    // appel au service méthode put
    // ici on ne récupère pas data car on est redirigé vers /orders
    this.ordersService.update(obj).subscribe(() => {
      // redirection
      this.router.navigate(['']);
    });
  }

  public onDelete(id: number) {
    // appel au service
    this.ordersService.delete(id).subscribe((data) => {
      console.log(data);
      // redirection
      this.router.navigate(['']);
    });
  }
}
