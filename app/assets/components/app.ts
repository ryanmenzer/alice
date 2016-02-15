import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DashboardComponent} from './dashboard/dashboard';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/Dashboard']">Dashboard</a>
      <a [routerLink]="['/Heroes']">Heroes</a>
    </nav>
    <base href="/">
    <router-outlet></router-outlet>
  `,
  styleUrls: ['/assets/stylesheets/app.css'],
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  {path: '/', name: 'Default', redirectTo:['Dashboard']},
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true}
])
export class AppComponent {
  public title = 'Tour of Heroes';
}
