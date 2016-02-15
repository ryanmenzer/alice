import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
// import {Hero} from '../heroes/hero';
// import {HeroService} from '../heroes/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './app/dashboard/views/dashboard.html',
  styleUrls: ['./app/dashboard/styles/dashboard.css']
})
export class DashboardComponent implements OnInit {
  // public heroes: Hero[] = [];
  //
  // constructor(private _heroService: HeroService, private _router: Router) { }
  //
  // ngOnInit() {
  //   this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
  // }
  //
  // gotoDetail(hero: Hero) {
  //   this._router.navigate(['HeroDetail', { id: hero.id }]);
  // }
}
