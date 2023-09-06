import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';



@NgModule({
  declarations: [
    TotalPipe,
    StateDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TotalPipe,
    StateDirective
  ]
})
export class SharedModule { }
