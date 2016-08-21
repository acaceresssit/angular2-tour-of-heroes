import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroService } from '../hero/hero.service';
import { SecretHeroesComponent } from './index';

@NgModule({
    declarations: [
      SecretHeroesComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [
      HeroService
    ],
    exports: [
      SecretHeroesComponent
    ]
})
export class SecretHeroesModule {
}
