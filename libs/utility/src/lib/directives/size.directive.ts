import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[bulmaSize]'
})
export class SizeDirective {
  @Input() bulmaSize: 'small' | 'medium' | 'large';
  @HostBinding('class.is-small') isSmall = this.getBulmaSizeClass();
  @HostBinding('class.is-medium') isMedium = this.getBulmaSizeClass();
  @HostBinding('class.is-large') isLarge = this.getBulmaSizeClass();

  constructor() {}
  private getBulmaSizeClass(): boolean {
    switch (this.bulmaSize) {
      case 'small':
        return true;
      case 'medium':
        return true;
      case 'large':
        return true;
    }
  }
}
