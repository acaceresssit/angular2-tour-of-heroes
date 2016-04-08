# Angular 2 Tour of Secret Heroes

This is a fork of [John Papa's](https://twitter.com/John_Papa) [Angular 2 Tour of Heroes repo](https://github.com/johnpapa/angular2-tour-of-heroes) and the aim of it is to show how to add authenticaton to the app using [JSON Web Tokens](https://jwt.io/introduction). JSON Web Tokens (JWT) are retrieved for users with [Auth0](https://auth0.com/signup) and are saved in local storage on a successful login. The user's JWT is then sent to the server in HTTP requests as an `Authorization` header.

## Running the App

Install the dependencies in both the **client** and **server** directories.

```bash
cd client && npm install
npm start
```

Then in a new console tab:

```bash
cd server && npm install
npm start
```

You will need to remove the placeholder strings in `auth.service.ts` and `server.js` and put in your Auth0 (or your own) credentials.

## Do I Need to Use Auth0?

Auth0 provides an extremely easy way to retrieve JWTs for your users so that you don't need to code any identity verification or token signing logic yourself. With Auth0 you can also use any social identity provider at the flip of a switch--no need to write any code.

You can by all means write your own authentication layer for this demo too. Simply modify the [**express-jwt**](https://github.com/auth0/express-jwt) middleware (more on that below) to use your own secret key.

## Differences from the Original

To demonstrate a full authentication setup, there are a number of differences between this fork and the original.

### 1. Login and Logout Buttons

Two new buttons--one for logging in and the other for logging out--have been added to the navbar in `app.component.ts`. Clicks on these buttons call methods that are exposed by a new `AuthService`, which provides logic for opening up the Auth0 Lock widget and saving the user's profile object and JWT in local storage.

### 2. Express Server

Instead of storing the heroes data locally, it is now being served from a NodeJS app that uses Express. This app is in the `server` directory and it exposes four endpoints:

**`GET` /api/public/heroes**
* Returns a list of heroes that are available to be viewed without authentication.

**`GET` /api/public/heroes/:id**
* Returns a specific public hero based on its `id`.

**`GET` /api/secret/heroes**
* Returns a list of secret heroes that are available to be viewed **only** if the user is authenticated.

** `GET` /api/secret/heroes/:id**
* Returns a specific secret public hero based on its `id`.

The server uses [**express-jwt**](https://github.com/auth0/express-jwt) to protect the secret hero endpoints. The middleware needs to be configured with your Auth0 (or your own) secret key and client ID.

```js
const authCheck = jwt({
  secret: new Buffer('YOUR_SECRET_KEY', 'base64'),
  audience: 'YOUR_CLIENT_ID'
});
```

### 3. Additional Components and Routes

There are a few additional components and corresponding routes to handle the secret heroes. They are:

* `SecretHeroesComponent`
* `SecretHeroDetailComponent`

These routes are restricted with the `CanActivate` lifecycle hook from `angular2/router`. This hook runs before the component wires up, and the `tokenNotExpired` function from **angular2-jwt** is used to return `true` or `false` to it.

### 4. No More Mock Heroes

The `mock-heroes.ts` file has been removed because heroes are now being retrieved from the server.

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.