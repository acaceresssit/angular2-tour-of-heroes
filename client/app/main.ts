import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(AuthHttp, { 
    useFactory: (http: Http) => {
      return new AuthHttp(new AuthConfig(), http);
    },
    deps: [Http]
  }),
  AuthService
]);