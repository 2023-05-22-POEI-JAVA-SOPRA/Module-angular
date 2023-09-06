import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent {
  public form!: FormGroup;

  constructor (private fb : FormBuilder){}

  ngOnInit(){
    // associer un objet à chacun des inputs du form
    this.form = this.fb.group({
      tjmHt : [500],
      typePresta : ['type presta']
    })
  }


}
