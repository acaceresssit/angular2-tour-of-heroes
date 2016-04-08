import { Component, OnInit } from 'angular2/core';
import { Router, CanActivate } from 'angular2/router';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

import { Hero } from './hero';
import { SecretHeroDetailComponent } from './secret-hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-secret-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css'],
  directives: [SecretHeroDetailComponent]
})

@CanActivate(() => tokenNotExpired())

export class SecretHeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private _router: Router,
    private _heroService: HeroService) { }
  
  getSecretHeroes() {
    this._heroService.getSecretHeroes()
      .map(res => res.json())
      .subscribe(
        data => this.heroes = data,
        error => console.log(error)
      );
  }

  ngOnInit() {
    this.getSecretHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this._router.navigate(['SecretHeroDetail', { id: this.selectedHero.id }]);
  }
}
