import { HTTP_PROVIDERS } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

export const APP_PROVIDERS = [
  HTTP_PROVIDERS,
  AUTH_PROVIDERS,
  AuthService,
  AuthGuard
];
