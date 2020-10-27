import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services';


@Injectable({
  providedIn: 'root'
})
export class ProductsGuard implements CanActivate {
  constructor(private router: Router,
              public authenticationService: AuthenticationService){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authenticationService.isLoggedIn) {
      return true;
    }
    window.alert('Please log in!')
    this.router.navigate(['login']);


  }
  
}
