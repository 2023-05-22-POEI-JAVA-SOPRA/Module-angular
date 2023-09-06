import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TotalPipe, StateDirective, BtnComponent],
  imports: [CommonModule, RouterModule],
  exports: [TotalPipe, StateDirective, BtnComponent],
})
export class SharedModule {}
