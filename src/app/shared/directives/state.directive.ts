import { Directive, HostBinding, Input } from '@angular/core';

// DECORATOR
@Directive({
  selector: '[appState]',
})
export class StateDirective {
  @Input() stateObj!: string;
  @HostBinding('class') tdClassName!: string;

  constructor() {
    // console.log(this.stateObj, 'depuis constructor');
  }

  // déclenché une seule fois
  ngOnInit() {
    // console.log(this.stateObj, 'depuis constructor');
    // CONFIRMED state-confirmed
    // this.tdClassName = 'state-' + this.stateObj.toLowerCase();
    this.tdClassName = `state-${this.stateObj.toLowerCase()}`;
  }

  // CYCLE DE VIE - LIFE CYCLE
}
