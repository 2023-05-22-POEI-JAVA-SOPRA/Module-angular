import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent {
  @Input() title!: string;
  @Input() routeInfo!: string;
  @Input() styleBtn!: string;

  constructor() {
    // console.log(this.title);
  }

  ngOnInit() {
    console.log(this.title);
  }
}
