import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router
  ) {

  }



  canActivate(): Observable<boolean> {
    return this.authService.isLogged().pipe(map(user => {
      if (user)
        return true;
      else
        this.router.navigate(['/login']);
    }));
  }



}
