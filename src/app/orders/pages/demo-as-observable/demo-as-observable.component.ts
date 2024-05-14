import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-demo-as-observable',
  templateUrl: './demo-as-observable.component.html',
  styleUrls: ['./demo-as-observable.component.scss'],
})
export class DemoAsObservableComponent {
  // cette propriété n'est pas accessible à l'extérieur d'un service par exemple
  private dataSubject = new Subject<any>();
  // cette propriété est accessible mais est en lecture seule
  data$ = this.dataSubject.asObservable(); // Transformation en lecture seule

  constructor() {
    console.log('test');

    //this.sendData('data ebvoyée');

    this.subscribeToData();

    setTimeout(() => {
      this.sendData('données envoyées');
    }, 3000);
  }

  // Méthode pour souscrire à data$
  subscribeToData() {
    this.data$.subscribe((data) => {
      console.log(data, 'test2');
    });
  }

  // méthode pour émettre des données
  sendData(data: any) {
    this.dataSubject.next(data);
  }
}
