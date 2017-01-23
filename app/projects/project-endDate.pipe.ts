import { PipeTransform, Pipe} from '@angular/core';
import { DatePipe } from '@angular/common';

const datePipe = new DatePipe('en-US');

@Pipe({
    name: 'endDate'
})
export class ProjectEndDatePipe implements PipeTransform {

    transform(value: Date): string {
        if (value === null) return 'Not Completed';
        return datePipe.transform(value);
    }
}