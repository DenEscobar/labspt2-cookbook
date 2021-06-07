import auth0 from 'auth0-js';

export default class Auth{
    auth0 =new auth0.WebAuth({
        domain: 'kookr-app.auth0.com',
        clientID: '1076142196734-jcjqv8o2ubvhmsq36l64maiqecvclg73.apps.googleusercontent.com',
        redirectUri: 'https://kookr.netlify.com/create',
        // audience: '' ??
        //responseType:  ''
        //scope: '' ?? open prop
    })
}