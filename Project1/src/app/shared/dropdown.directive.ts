import { Directive, HostListener, Input, HostBinding } from '../../../node_modules/@angular/core';
import { Button } from '../../../node_modules/@types/selenium-webdriver';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}