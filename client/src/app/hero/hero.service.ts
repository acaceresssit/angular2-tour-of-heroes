import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

  API_URL: String = 'http://localhost:3002/api';

  constructor(private http: Http, private authHttp: AuthHttp) {}

  getHeroes() {
    return this.http.get(`${this.API_URL}/public/heroes`);
  }

  getSecretHeroes() {
    return this.authHttp.get(`${this.API_URL}/secret/heroes`);
  }

  getHero(id: number) {
    return this.http.get(`${this.API_URL}/public/heroes/${id}`);
  }

  getSecretHero(id: number) {
    return this.authHttp.get(`${this.API_URL}/secret/heroes/${id}`);
  }
}
