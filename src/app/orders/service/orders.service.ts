import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

// DECORATOR
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  // propriétés et des méthodes

  public configUrl = 'http://localhost:3007/orders';

  public sumUp(a: number, b: number): number {
    return a + b;
  }

  // créer une méthode pour fetch('url');
  public getData(): Observable<Order[]> {
    return this.http.get<Order[]>(this.configUrl);
  }

  // créer une méthode pour post .post('url', newObj);
  // attention, tous les appels HTTP utilisent l'écriture observable/observer
  public add(obj: Order): Observable<Order> {
    return this.http.post<Order>(this.configUrl, obj);
  }
  
}
