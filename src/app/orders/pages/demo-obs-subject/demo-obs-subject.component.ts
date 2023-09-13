import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-demo-obs-subject',
  templateUrl: './demo-obs-subject.component.html',
  styleUrls: ['./demo-obs-subject.component.scss'],
})
export class DemoObsSubjectComponent {
  // créer un observable de type Subject()
  subj = new Subject();

  constructor() {
    // créer un premier observer
    this.subj.subscribe((data) => {
      console.log(data, 'premier observer');
    });

    // on passe des valeurs
    this.subj.next(1);

    // créer un deuxième observer
    this.subj.subscribe((data) => {
      console.log(data, 'deuxième observer');
    });

    // on passe des valeurs
    this.subj.next(2);

    // on passe des valeurs
    this.subj.next(Math.random());

    // 3ème observer"
    // cet observer ne reçoit rien car après .next()
    this.subj.subscribe((data) => {
      console.log(data, 'troisième observer');
    });
  }
}
