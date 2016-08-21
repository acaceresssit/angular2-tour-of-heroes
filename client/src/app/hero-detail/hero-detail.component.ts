import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Hero } from '../hero/hero.model';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'as-hero-detail',
  templateUrl: 'app/hero-detail/hero-detail.html',
  styleUrls: ['app/hero-detail/hero-detail.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _route: ActivatedRoute) {
  }

  ngOnInit() {

    this._route.params
      .map(params => params['id'])
      .subscribe(id => {
        this._heroService.getHero(id)
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
