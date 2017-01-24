import { Component, Input } from '@angular/core';

import { IProject } from '../project';

@Component({
    selector: 'pm-project-hours-list',
    templateUrl: 'app/projects/hours/project-hours-list.component.html'
})
export class ProjectHoursListComponent{
    
    @Input() project: IProject[];
    
}