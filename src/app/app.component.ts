import { Component } from '@angular/core';

// DECORATOR
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crm';

  // créer une propriété en booléen
  // ici pas besoin de typer car inference
  public open = false;

  public onClick() {
    console.log('cliqué');
    // inverser la valeur de open
    this.open = !this.open;
    // console.log(this.open);
  }
} // NE RIEN ECRIRE APRES CETTE LIGNE
