import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Hero } from '../hero/hero.model';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'as-hero-detail',
  templateUrl: 'app/secret-hero-detail/secret-hero-detail.html',
  styleUrls: ['app/secret-hero-detail/secret-hero-detail.css']
})
export class SecretHeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params
      .map(params => params['id'])
      .subscribe(id => {
        this.heroService.getSecretHero(id)
          .map(res => res.json())
          .subscribe(
            data => this.hero = data,
            error => console.log(error)
          );
      });
  }

  goBack() {
    window.history.back();
  }
}
