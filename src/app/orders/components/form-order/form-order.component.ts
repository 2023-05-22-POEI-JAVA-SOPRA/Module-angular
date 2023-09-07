import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent {
  public form!: FormGroup;
  @Input() objOrder!: Order;
  @Output() submitted = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // console.log(this.objOrder);

    // associer un objet à chacun des inputs du form
    this.form = this.fb.group({
      tjmHt: [this.objOrder.tjmHt],
      typePresta: [this.objOrder.typePresta],
      nbJours: [this.objOrder.nbJours],
      tva: [this.objOrder.tva],
      state: [this.objOrder.state],
      client: [this.objOrder.client],
      comment: [this.objOrder.comment],
      id: [this.objOrder.id],
    });
  }

  public onSubmit() {
    // vérifier que le clic fonctionne
    // console.log('cliqué depuis onSubmit');
    // vérifier le form
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
}

// faire un appel http en méthode post avec obj
// dans le service, on ajoute un méthode addObj(this.form.value)
// this.ordersService.addObj(newValue).subscribe()
