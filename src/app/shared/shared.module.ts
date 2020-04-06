import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { NumericDirective } from './directives/numeric.directive';
import { ToolTipDirective } from './directives/tooltip.directive'; 
import { AccordianDirective } from './directives/accordian.directive';
import { DragablePopUpDirective } from './directives/dragable-pop-up.directive'; 

import { SumPipe } from './pipes/sum.pipe';
import { GroupByPipe } from './pipes/groupby.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { DistinctFilterPipe } from './pipes/distinct-filter.pipe';
import { ConvertToNumberPipe } from './pipes/convert-to-number.pipe';
import { ChallanDateFormatPipe } from './pipes/challan-date-format.pipe';

// import { SpinnerService } from '../core/services/spinner.service';
import { CommonApiService } from './services/common-api.service';

@NgModule({
    declarations: [
        NumericDirective, ConvertToNumberPipe, DateFormatPipe, 
        AccordianDirective, SumPipe, ChallanDateFormatPipe, DragablePopUpDirective,
          SearchFilterPipe, ToolTipDirective,
        DistinctFilterPipe, GroupByPipe,  
    ],
    imports: [
        CommonModule, FormsModule 
    ],
    exports: [
        NumericDirective, ConvertToNumberPipe, DateFormatPipe, SumPipe, ChallanDateFormatPipe,
        CommonModule, FormsModule, HttpClientModule,  
        AccordianDirective, DragablePopUpDirective, SearchFilterPipe, 
        ToolTipDirective, DistinctFilterPipe,  GroupByPipe,  
    ],
    providers: []
})
export class SharedModule { 
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [CommonApiService, DateFormatPipe, ConvertToNumberPipe,   GroupByPipe]
        };
    }
}

