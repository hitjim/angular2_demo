import { PipeTransform, Pipe} from '@angular/core';
import { DatePipe } from '@angular/common';

const datePipe = new DatePipe('en-US');

@Pipe({
    name: 'startDate'
})
export class ProjectStartDatePipe implements PipeTransform {

    transform(value: Date): string {
        if (value === null) return 'Not Started';
        return datePipe.transform(value);
    }
}