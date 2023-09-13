import { jsDocComment } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo-observable',
  templateUrl: './demo-observable.component.html',
  styleUrls: ['./demo-observable.component.scss'],
})
export class DemoObservableComponent {
  // librairie rxjs
  // cold observable = observable froid
  observable = new Observable((obs) => {
    obs.next(1);
    obs.next(2);
    obs.next(Math.random())

  });

  // ici cette écriture n'est pas possible
  // obs.next(3)

  // librairie rxjs

  constructor() {
    // premier observer
    this.observable.subscribe((data) => {
      console.log(data); //
    });

    // deuxième observer
    this.observable.subscribe((data) => {
      console.log(data); //
    });
  }
}
