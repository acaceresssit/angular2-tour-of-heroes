import { Routes } from '@angular/router';

import { SecretHeroesComponent } from './secret-heroes.component';
import { AuthGuard } from '../auth/auth-guard.service';

export const SecretHeroesRoutes: Routes = [
  { path: 'secret-heroes', component: SecretHeroesComponent, canActivate: [AuthGuard] }
];
