import { Injectable } from '@angular/core';

// DECORATOR
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor() {}

  // propriétés et des méthodes

  public sumUp(a: number, b: number): number {
    return a + b;
  }

  // créer une méthode pour fetch('url');
  
}
