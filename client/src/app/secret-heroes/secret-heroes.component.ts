import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero/hero.model';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'as-secret-heroes',
  templateUrl: 'app/secret-heroes/secret-heroes.html',
  styleUrls: ['app/secret-heroes/secret-heroes.css']
})
export class SecretHeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getSecretHeroes()
      .map(res => res.json())
      .subscribe(
        data => this.heroes = data.slice(1, 5),
        error => console.log(error)
      );
  }

  onSelect(hero: Hero) {
    let link = ['/secret-heroes', hero.id ];
    this.router.navigate(link);
  }
}
