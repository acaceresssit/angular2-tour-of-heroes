import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroService } from '../hero/hero.service';
import { HeroesComponent } from './index';

@NgModule({
    declarations: [
      HeroesComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [
      HeroService
    ],
    exports: [
      HeroesComponent
    ]
})
export class HeroesModule {
}
