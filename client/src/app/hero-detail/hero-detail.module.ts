import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero/hero.service';
import { HeroDetailComponent } from './index';

@NgModule({
    declarations: [
      HeroDetailComponent
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [
      HeroService
    ],
    exports: [
      HeroDetailComponent
    ]
})
export class HeroDetailModule {
}
