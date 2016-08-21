import { Routes } from '@angular/router';

import { SecretHeroDetailComponent } from './secret-hero-detail.component';
import { AuthGuard } from '../auth/auth-guard.service';

export const SecretHeroDetailRoutes: Routes = [
  { path: 'secret-heroes/:id', component: SecretHeroDetailComponent, canActivate: [AuthGuard] }
];
