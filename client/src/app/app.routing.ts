import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { HeroesRoutes } from './heroes/index';
import { HeroDetailRoutes } from './hero-detail/index';
import { SecretHeroesRoutes } from './secret-heroes/index';
import { SecretHeroDetailRoutes } from './secret-hero-detail/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...HeroesRoutes,
    ...HeroDetailRoutes,
    ...SecretHeroesRoutes,
    ...SecretHeroDetailRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
