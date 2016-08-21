import { NgModule } from '@angular/core';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { HeroesModule } from './heroes/heroes.module';
import { HeroDetailModule } from './hero-detail/hero-detail.module';
import { SecretHeroesModule } from './secret-heroes/secret-heroes.module';
import { SecretHeroDetailModule } from './secret-hero-detail/secret-hero-detail.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NavbarModule,
        HomeModule,
        HeroesModule,
        HeroDetailModule,
        SecretHeroesModule,
        SecretHeroDetailModule,
        routing
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
