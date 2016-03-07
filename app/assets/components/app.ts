import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './heroes/hero-detail';
import {DashboardComponent} from './dashboard/dashboard';
import {HeroService} from './heroes/hero.service';

import {ChatNavBar} from './dashboard/nav-bar';
import {ChatThreads} from './messages/ChatThreads';
import {ChatWindow} from './messages/ChatWindow';

import {
  MessagesService,
  ThreadsService,
  UserService
} from './services';

import {ChatExampleData} from './messages/ChatExampleData';

@Component({
  selector: 'my-app',
  template: `
    <nav-bar></nav-bar>
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/Dashboard']">Dashboard</a>
      <a [routerLink]="['/Heroes']">Heroes</a>
    </nav>
    <base href="/">

    <router-outlet></router-outlet>
  `,
  styleUrls: ['/assets/stylesheets/app.css'],
  directives: [ChatNavBar,
                 ChatThreads,
                 ChatWindow, ROUTER_DIRECTIVES],
  providers: [HeroService, ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/', name: 'Default', redirectTo:['Dashboard']},
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  {path: '/heroes', name: 'Heroes', component: HeroesComponent},
  {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class AppComponent {
  public title = 'Tour of Heroes';
  constructor(public messagesService: MessagesService,
                public threadsService: ThreadsService,
                public userService: UserService) {
    ChatExampleData.init(messagesService, threadsService, userService);
                }
}
