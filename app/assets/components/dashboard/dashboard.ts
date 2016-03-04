import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from '../heroes/hero';
import {HeroService} from '../heroes/hero.service';
import {SurveyBuilder} from '../surveys/surveys';

import {ChatNavBar} from './nav-bar';
import {ChatThreads} from '../messages/ChatThreads';
import {ChatWindow} from '../messages/ChatWindow';

import { servicesInjectables } from '../services';

import {
  MessagesService,
  ThreadsService,
  UserService
} from '../services';

import {ChatExampleData} from '../messages/ChatExampleData';

@Component({
  selector: 'my-dashboard',
  templateUrl: './templates/dashboard/dashboard.html',
  styleUrls: ['./assets/dashboard/dashboard.css'],
  directives: [SurveyBuilder]
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];
  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public userService: UserService, private _heroService: HeroService, private _router: Router) {
    ChatExampleData.init(messagesService, threadsService, userService);
  }

  ngOnInit() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
  }

  gotoDetail(hero: Hero) {
    this._router.navigate(['HeroDetail', { id: hero.id }]);
  }
}
