import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
@NgModule({
  imports: [CommonModule],
  exports: [ModalComponent],
  declarations: [ModalComponent]
})
export class ModalModule {}
