import { PipeTransform, Pipe} from '@angular/core';
import { DatePipe } from '@angular/common';

import { IProject } from './project'

const datePipe = new DatePipe('en-US');

@Pipe({
    name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

    transform(value: IProject[], filterBy: string): IProject[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter((project: IProject) => 
            project.project_name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }

    formatStartDate(value: Date): string {
        var ret: string;
        if (value === null) return 'Not Started';
        return datePipe.transform(value);
    }

     formatEndDate(value: Date): string {
        var ret: string;
        if (value === null) return 'Not Completed';
        return datePipe.transform(value);
    }
}