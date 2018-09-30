import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';

@Component({
  selector: 'bulma-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
  @Input() active = false;
  @Output() closed: EventEmitter<any> = new EventEmitter();
  constructor() {}

  closeModal() {
    this.active = false;
    this.closed.emit(this.active);
  }
}
