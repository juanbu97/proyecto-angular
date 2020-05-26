import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailCorrectoGuard implements CanActivate {

  constructor(
    private __authService:AuthService,
  ){

  }
  canActivate():Observable<boolean>{

    return true;
  }

}
