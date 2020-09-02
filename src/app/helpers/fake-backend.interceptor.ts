import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // array in local storage for registered users
    let users: any[] = JSON.parse(localStorage.getItem('users')) || [];

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {
      // authenticate
      if(request.url.endsWith('/users/auth') && request.method === 'POST'){
        // find if any user matches login credentials
        let filteredUsers = users.filter(user => {
          return user.email === request.body.email && user.password === request.body.password;
        });
        if(filteredUsers.length){
          let user = filteredUsers[0];
          let body = {
            id: user.id,
            email: user.email,
            password: user.passsword,
            confirm_password: user.confirm_password
          }
          return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    // else return 400 bad request
                    return throwError({ error: { message: 'Email or password is incorrect' } });
                }
      }
      // register user
      if (request.url.endsWith('/users/register') && request.method === 'POST') {
        // get new user object from post body
        let newUser = request.body;

        // validation
        let duplicateUser = users.filter(user => 
          { return user.email === newUser.email; }).length;
          
        if (duplicateUser) {
            return throwError({ error: 
              { message: 'Email "' + newUser.email + '" is already taken' } });
        }

        // save new user
        newUser.id = users.length + 1;
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // respond 200 OK
        return of(new HttpResponse({ status: 200 }));
    }
    // pass through any requests not handled above
    return next.handle(request);
    }))
    .pipe(materialize())
    .pipe(delay(500))
    .pipe(dematerialize());
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
