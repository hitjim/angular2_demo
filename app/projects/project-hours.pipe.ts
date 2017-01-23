import { PipeTransform, Pipe} from '@angular/core';

import {IProjectHour} from './project-hour'

@Pipe({
    name: 'hours'
})
export class ProjectHoursPipe implements PipeTransform {

    transform(value: IProjectHour[]): number {
        var total: number = 0;
        value.forEach(hour => {
            total += hour.hours;
        });
        return total;
    }
}