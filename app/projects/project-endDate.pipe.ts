import { PipeTransform, Pipe} from '@angular/core';
import { DatePipe } from '@angular/common';

const datePipe = new DatePipe('en-US');

@Pipe({
    name: 'endDate'
})
export class ProjectEndDatePipe implements PipeTransform {

    transform(value: Date): string {
        if (value === null || value === <any>"") return 'Not Completed';
        let date = new Date(value);
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        return date.toLocaleDateString();
    }
}