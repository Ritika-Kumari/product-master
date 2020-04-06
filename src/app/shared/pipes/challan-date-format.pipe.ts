import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'challanDateFormat'
})
export class ChallanDateFormatPipe implements PipeTransform {
    transform(value: string): string {
        if (value) {
            let theDate = new Date(Date.parse(value));
            let theMonth = ("0" + (theDate.getMonth() + 1)).slice(-2);
            let theYear = theDate.getFullYear();
            let theChallanDateFormat = theMonth + '/' + theYear;
            // Another check for the '01/1' is used to prevent the default value of the date in C# when
            // date is not being provided by the api.
            if (theChallanDateFormat == '01/1900' || theChallanDateFormat == '01/1') {
                return '';
            } else {
                return theChallanDateFormat;
            }
        } else {
            return '';
        }
    }
}
