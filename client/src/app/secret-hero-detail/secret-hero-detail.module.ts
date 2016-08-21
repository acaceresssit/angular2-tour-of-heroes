import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero/hero.service';
import { SecretHeroDetailComponent } from './index';

@NgModule({
    declarations: [
      SecretHeroDetailComponent
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [
      HeroService
    ],
    exports: [
      SecretHeroDetailComponent
    ]
})
export class SecretHeroDetailModule {
}
