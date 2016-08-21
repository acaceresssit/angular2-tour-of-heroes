import { Routes } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';

export const HeroDetailRoutes: Routes = [
  { path: 'heroes/:id', component: HeroDetailComponent }
];
