System.register(['angular2/core', 'angular2/router', './heroes/heroes.component', './heroes/hero-detail', './dashboard/dashboard', './heroes/hero.service', './surveys/surveys', './messages/messages'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, heroes_component_1, hero_detail_1, dashboard_1, hero_service_1, surveys_1, messages_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_1_1) {
                hero_detail_1 = hero_detail_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (surveys_1_1) {
                surveys_1 = surveys_1_1;
            },
            function (messages_1_1) {
                messages_1 = messages_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['/Dashboard']\">Dashboard</a>\n      <a [routerLink]=\"['/Heroes']\">Heroes</a>\n      <a [routerLink]=\"['/Surveys']\">Surveys</a>\n      <a [routerLink]=\"['/Chat']\">Chat</a>\n    </nav>\n    <base href=\"/\">\n\n    <router-outlet></router-outlet>\n  ",
                        styleUrls: ['/assets/stylesheets/app.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [hero_service_1.HeroService, router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Default', redirectTo: ['Dashboard'] },
                        { path: '/dashboard', name: 'Dashboard', component: dashboard_1.DashboardComponent, useAsDefault: true },
                        { path: '/heroes', name: 'Heroes', component: heroes_component_1.HeroesComponent },
                        { path: '/detail/:id', name: 'HeroDetail', component: hero_detail_1.HeroDetailComponent },
                        { path: '/surveys', name: 'Surveys', component: surveys_1.SurveyBuilder },
                        { path: '/chat', name: 'Chat', component: messages_1.ChatComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
