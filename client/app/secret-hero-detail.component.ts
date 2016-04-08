import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams, CanActivate } from 'angular2/router';
import { tokenNotExpired } from 'angular2-jwt';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-secret-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})

@CanActivate(() => tokenNotExpired())

export class SecretHeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getSecretHero(id)
      .map(res => res.json())
      .subscribe(
        data => this.hero = data,
        error => console.log(error)
      );
  }

  goBack() {
    window.history.back();
  }
}