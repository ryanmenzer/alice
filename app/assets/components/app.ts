import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './heroes/hero-detail';
import {DashboardComponent} from './dashboard/dashboard';
import {HeroService} from './heroes/hero.service';
import {SurveyBuilder} from './surveys/surveys';
import {ChatComponent} from './messages/messages';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/Dashboard']">Dashboard</a>
      <a [routerLink]="['/Heroes']">Heroes</a>
      <a [routerLink]="['/Surveys']">Surveys</a>
      <a [routerLink]="['/Chat']">Chat</a>
    </nav>
    <base href="/">

    <router-outlet></router-outlet>
  `,
  styleUrls: ['/assets/stylesheets/app.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService, ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/', name: 'Default', redirectTo:['Dashboard']},
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  {path: '/heroes', name: 'Heroes', component: HeroesComponent},
  {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent},
  {path: '/surveys', name: 'Surveys', component: SurveyBuilder},
  {path: '/chat', name: 'Chat', component: ChatComponent}
])
export class AppComponent {
  public title = 'Tour of Heroes';
}
