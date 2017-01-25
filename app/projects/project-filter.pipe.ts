import { PipeTransform, Pipe} from '@angular/core';

import { IProject } from './project'

@Pipe({
    name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

    transform(value: IProject[], filterBy: string, showComplete: boolean): IProject[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;

        let returnVal = filterBy ? value.filter((project: IProject) => 
            project.project_name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
        return showComplete ? returnVal : returnVal.filter((project: IProject) => 
            project.end_date === null);
    }
}