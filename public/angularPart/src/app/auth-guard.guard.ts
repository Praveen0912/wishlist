import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  status:any;
  constructor(private auth: DataService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const token = JSON.parse(localStorage.getItem('isCustomer'));
      if(token != null){
        this.auth.isLoggedIn(token.data).subscribe(flag =>{
        this.status = flag.status; 
        if(!this.status){
          localStorage.clear();
          this.router.navigateByUrl('/login');
          return false;
        }
        });
        return true;
      }
      else if(token == null){
        this.router.navigateByUrl('/login'); 
        return false;
      }
  }
}
