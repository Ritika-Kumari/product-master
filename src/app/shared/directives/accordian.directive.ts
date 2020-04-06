import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAccordian]'
})
export class AccordianDirective {

  constructor(private _theElement: ElementRef) { }
  @HostBinding('style.cursor') cursor = 'pointer';
  @HostListener('click', ['$event.target'])
  onClick() {
    
this._theElement.nativeElement.querySelector('.btn-tool').click();
  }
}
