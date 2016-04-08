import { Injectable } from 'angular2/core';
import { tokenNotExpired} from 'angular2-jwt';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  
  lock: Auth0Lock = new Auth0Lock('YOUR_CLIENT_ID', 'YOUR_CLIENT_DOMAIN');
  
  login() {    
    this.lock.show();
  }
  
  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    return tokenNotExpired();
  }
  
  getAuthDetails() {
    let hash = this.lock.parseHash();
    if (hash) {
      if (hash.error) {
        console.log('There was an error logging in', hash.error);
      } else {
        this.lock.getProfile(hash.id_token, function(err: Object, profile: Object) {
          if (err) {
            console.log(err);
            return;
          }
          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('id_token', hash.id_token);
        });
      }
    }
  }
}