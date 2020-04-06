import { Directive, HostListener, OnInit, OnDestroy } from '@angular/core';

declare let $: any;

@Directive({
  selector: '[appDragablePopUp]'
})
export class DragablePopUpDirective implements OnInit, OnDestroy {
  ngOnInit() {
    $('.modal-dialog').draggable({
      handle: ".modal-header"
    });
    $('.modal-dialog').draggable("destroy");
    $('.modal-dialog').draggable({
      handle: ".modal-header"
    });
  }

  ngOnDestroy() {
    $('.modal-dialog').draggable({
      handle: ".modal-header"
    });
    $('.modal-dialog').draggable("destroy");
  }
  constructor() { }
  @HostListener('click', ['$event.target'])
  onClick() {
    $('.modal-dialog').css({
      top: 0,
      left: 0
    });
  }
}
