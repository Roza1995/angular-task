import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    return this.http.post<any>('/users/auth', 
    { email: email,password: password})
    .pipe(map(user => {
      if(user){
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
        return user;
    }))

  }

}
