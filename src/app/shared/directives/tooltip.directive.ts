import { Directive, Input, ElementRef } from '@angular/core';

declare let $: any;

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[mytooltip]'
})
export class ToolTipDirective {
    private _val: any;

    @Input() set mytooltip(value: any) {

        this._val = value;
        let theWindowWidth = $(window).width();
        if (this._val) {
            $(this._theElement.nativeElement).popover({ placement: 'right', sanitize: false, sanitizeFn: content => content });
            $(this._theElement.nativeElement).popover('show');
            $('.popover-body').addClass('font-weight-bold text-danger');
            if (theWindowWidth < 763) {
                $("div.popover").css('visibility', 'hidden');
            }
        } else {
            $(this._theElement.nativeElement).popover('dispose');
        }

        $(this._theElement.nativeElement).off('shown.bs.popover').on('shown.bs.popover', function () {
            let theWindowWidth = $(window).width();
            if (theWindowWidth < 763) {
                $("div.popover").removeClass('bs-popover-left');
                $("div.popover").addClass('bs-popover-right');
                $("div.popover").css('left', '65%');
                $("div.popover").css('visibility', 'visible');
            }
        });
    }

    get mytooltip(): any {
        return this._val;
    }

    constructor(private _theElement: ElementRef) { }
}
