import { Component } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  // notre objectif : déclencher sumUp et afficher le résultat dans la console.

  public title = 'Liste des commandes';

  // any type => permet de stocker tous types de variables dans tab

  // tab est de type tableau d'Order et on n'initialise pas
  // au démarrage de l'application
  public tab!: Order[]; // false

  // ici on stocke StateOrder pour itérer dans l'HTML
  public states = Object.values(StateOrder);

  public headers: string[] = [
    'Action',
    'Type',
    'Client',
    'Nb Jours',
    'Tjm Ht',
    'Total HT',
    'Total TTC',
    'Etat',
  ];

  constructor(private ordersService: OrdersService) {
    // console.log(this.ordersService.sumUp(1, 2));

    // librairie RXJS = ce n'est pas ANGULAR
    // observable/ observé
    this.ordersService.getData().subscribe((data) => {
      console.log(data);
      this.tab = data; // true
      // console.log(this.tab);
    });
  }

  // méthode pour calculer HT et TTC
  // REMPLACER PAR LE PIPE TOTAL (VOIR SHARED MODULE)
  // public total(val: number, coef: number, tva?: number) {
  //   console.log('déclenché');
  //   // change detection

  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }

  public changeState(obj: Order, event: Event) {
    // console.log(obj);
    // console.log(event);
    const target = event.target as HTMLSelectElement;
    // console.log(target);
    const newState = target.value as StateOrder;
    console.log(newState);

    // Tout faire dans le service
    // créer un nouvel objet de type Order et lui affecter le newState
    // new Order(obj)
    // dans le service, .put ('url/id', obj)
    this.ordersService.changeState(obj, newState).subscribe((data) => {
      console.log(data, 'après modification');
      // obj = data;
      Object.assign(obj, data); 
    });
  }
}
