import { Injectable } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { OpportunityService } from './opportunity.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService   {

  constructor( private authService: AuthService,private _oppService: OpportunityService) { }
  user: SocialUser;
  loggedIn : boolean ;
  signInWithGoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    return this.authService.authState;
  }
  signOut() {
    localStorage.clear()
    this.loggedIn=false;
    return this.authService.signOut()
  }
}
