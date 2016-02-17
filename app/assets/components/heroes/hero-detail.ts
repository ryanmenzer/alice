import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: '/templates/heroes/views/hero-detail.html',
  styleUrls: ['/assets/stylesheets/heroes/css/hero-detail.css'],
  directives: [ROUTER_DIRECTIVES],
  inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero;

  constructor(private _heroService: HeroService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    if (!this.hero) {
      let id = +this._routeParams.get('id');
      this._heroService.getHero(id).then(hero => this.hero = hero);
    }
  }
}
