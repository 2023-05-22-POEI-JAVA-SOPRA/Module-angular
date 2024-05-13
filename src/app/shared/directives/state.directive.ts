import { Directive, HostBinding, Input } from '@angular/core';

// DECORATOR
@Directive({
  selector: '[appState]',
})
export class StateDirective {
  // directive d'attribut
  @Input() stateObj!: string;
  // cibler la classe de la balise <td>
  @HostBinding('class') tdClassName!: string;

  constructor() {
    // console.log(this.stateObj, 'depuis constructor');
  }

  // déclenché une seule fois
  ngOnInit() {
    // console.log(this.stateObj, 'depuis constructor');
    // CONFIRMED state-confirmed
    // this.tdClassName = 'state-' + this.stateObj.toLowerCase();
    // this.tdClassName = `state-${this.stateObj.toLowerCase()}`;
  }

  // ici on utilise ngOnChanges car besoin de modifier les styles plusieurs fois
  ngOnChanges() {
    this.tdClassName = `state-${this.stateObj.toLowerCase()}`;
    console.log(this.tdClassName);
  }
  // CYCLE DE VIE - LIFE CYCLE
}
