import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;

  constructor( 
    public afAuth: AngularFireAuth, 
    private router: Router,
    public ngZone: NgZone) { 

      this.afAuth.authState
      .subscribe(user => {
        if(user){
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));
        }else{
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
      })
    }


  //Register with email and password

  Register(email, password){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      this.ngZone.run(() => {
        window.alert("You have been successfuly registered!");
        this.router.navigate(['login']);
      })
    }).catch((error)=>{
      window.alert('Error. Please check your info');
    })
  }

  //Log In with email and password

  LogIn(email, password){
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['products']);
      });
      
    }).catch((error)=>{
      window.alert('Error. Please Register before Log In');
    })
  }

  //Log In with Google
  GoogleAuth(){
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  //Log In with Facebook
  FacebookAuth(){
    return this.AuthLogin(new auth.FacebookAuthProvider())
  }

  //Log In with GitHub

  GitHubAuth(){
    return this.AuthLogin(new auth.GithubAuthProvider());
  }


  //Auth logic to run Auth provider

  AuthLogin(provider){
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['products']);
        })
        
      }).catch((error)=>{
        window.alert(error);
      }) 
  }


  
  //Returns true when user is looged in 

  get isLoggedIn(){
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null)? true: false;
  }


  // Log out 

  LogOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

}
