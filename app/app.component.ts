import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div><h1>{{pageTitle}}</h1>
            <pm-projects></pm-projects>
        </div>
    `
})
export class AppComponent { 
    pageTitle: string = 'Project Management';
}