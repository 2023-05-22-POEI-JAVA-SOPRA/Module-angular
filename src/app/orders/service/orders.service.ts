import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
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
    return this.http.get<Order[]>(this.configUrl).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Order(obj);
        });
      })
    );
  }

  // créer une méthode pour post .post('url', newObj);
  // attention, tous les appels HTTP utilisent l'écriture observable/observer
  public add(obj: Order): Observable<Order> {
    return this.http.post<Order>(this.configUrl, obj);
  }

  // méthode créer nouvel objet à partir de obj et de newState
  public changeState(obj: Order, state: StateOrder): Observable<Order> {
    // créer nouvel objet à partir de obj
    const objNew = new Order(obj);
    // modifier la valeur de state
    objNew.state = state;
    // passer objNew à this.update(objNew)
    return this.update(objNew);
  }

  // méthode pour appel put = Observable
  public update(obj: Order): Observable<Order> {
    // .put(url/obj.id, nouvelObjet)
    // vérifier dans Network ou vérifier dans db.json
    return this.http.put<Order>(`${this.configUrl}/${obj.id}`, obj);
  }

  // getItemById()
  // http.get('url/id')
  public getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.configUrl}/${id}`);
  }

  // methode pour supprimer un objet
  public delete(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.configUrl}/${id}`);
  }
}
