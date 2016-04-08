import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { COMMON_DIRECTIVES } from 'angular2/common';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { SecretHeroesComponent } from './secret-heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { SecretHeroDetailComponent } from './secret-hero-detail.component';
import { HeroService } from './hero.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink]="['Secret Heroes']" *ngIf="auth.loggedIn()">Secret Heroes</a>
      <a (click)="auth.login()" *ngIf="!auth.loggedIn()">Login</a>
      <a [routerLink]="['Dashboard']" (click)="auth.logout()" *ngIf="auth.loggedIn()">Logout</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/secret/detail/:id',
    name: 'SecretHeroDetail',
    component: SecretHeroDetailComponent
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/secret-heroes',
    name: 'Secret Heroes',
    component: SecretHeroesComponent
  }
])
export class AppComponent {
  title = 'Tour of Heroes';
  
  constructor(private auth: AuthService) {}
  
  ngOnInit() {
    this.auth.getAuthDetails();
  }
}
