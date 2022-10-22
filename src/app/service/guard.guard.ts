import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WindowService } from './window.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private windowService:WindowService, private router: Router) { }
     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
        if (this.windowService.IsLoggedIn()) {
        return true;
        }
        //alert("Please sign in!")
        // navigate to login page as user is not authenticated
     this.router.navigate(['/phone']);
  return false;
  }

  }
