import { PipeTransform, Pipe} from '@angular/core';
import { DatePipe } from '@angular/common';

import { IProject } from './project'

const datePipe = new DatePipe('en-US');

@Pipe({
    name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

    transform(value: IProject[], filterBy: string, showComplete: boolean): IProject[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;

        let returnVal = filterBy ? value.filter((project: IProject) => 
            project.project_name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
console.log(showComplete);
        return showComplete ? returnVal : returnVal.filter((project: IProject) => 
            project.end_date === null);
    }
}