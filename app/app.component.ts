import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                    <a class='navbar-brand'>{{pageTitle}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['/home']">Home</a></li>
                        <li><a [routerLink]="['/projects']">Projects</a></li>
                        <li><a [routerLink]="['/customers']">Customers</a></li>
                    </ul>
                </div>
            </nav>
            <div class='container'>
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class AppComponent { 
    pageTitle: string = 'Project Management';
}