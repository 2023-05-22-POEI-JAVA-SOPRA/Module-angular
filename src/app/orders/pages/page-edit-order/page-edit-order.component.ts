import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
  }
}
