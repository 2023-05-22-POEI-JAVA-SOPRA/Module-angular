import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
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
  @Output() deleted = new EventEmitter();

  // ici on stocke StateOrder pour itérer dans l'HTML
  public states = Object.values(StateOrder);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // console.log(this.objOrder);

    // associer un objet à chacun des inputs du form
    this.form = this.fb.group({
      tjmHt: [this.objOrder.tjmHt],
      typePresta: [
        this.objOrder.typePresta,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
      nbJours: [
        this.objOrder.nbJours,
        [Validators.required, Validators.min(5), Validators.max(15)],
      ],
      tva: [this.objOrder.tva],
      state: [this.objOrder.state],
      client: [
        this.objOrder.client,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
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

  public onDelete() {
    // console.log(this.objOrder.id);//
    this.deleted.emit(this.objOrder.id);
  }
}

// faire un appel http en méthode post avec obj
// dans le service, on ajoute un méthode addObj(this.form.value)
// this.ordersService.addObj(newValue).subscribe()
