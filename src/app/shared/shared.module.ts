import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [TotalPipe, StateDirective, BtnComponent, ModalComponent],
  imports: [CommonModule, RouterModule],
  exports: [TotalPipe, StateDirective, BtnComponent, ModalComponent],
})
export class SharedModule {}
