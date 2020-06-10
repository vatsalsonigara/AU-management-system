import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { log } from 'util';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  template: '<reference types="gapi" />',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private locationStrategy: LocationStrategy,private _oppService:OpportunityService,
    private loginService:LoginService,private router:Router) { }
  user :SocialUser=this.loginService.user;
  loggedIn: boolean=this.loginService.loggedIn ;
  ngOnInit(): void {
    this.loggedIn=this.loginService.loggedIn;
    if(this.loggedIn) this.router.navigateByUrl('/home');
  }
  
  signInWithGoogle(){
    this.loggedIn=null;
    this.user=null;
     this.loginService.signOut().then((value)=>{
      this.signIn()
    }).catch(()=>{
      this.signIn()
    })
    
  }
  signOut(){
    this.loginService.signOut().then((value)=>{
      this.loggedIn=false;
      this.loginService.loggedIn=false;
    });
    
  }
  preventBackButton() {
    history.pushState(null, null, location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, null, location.href);
    })
  }
  signIn(){
    this.loginService.signInWithGoogle().subscribe(
      (user) => {
        this.loginService.user=this.user = user; 
        if(user != null) {
          this._oppService.sendLoginDetails(user).subscribe((data)=>{
            this.loginService.loggedIn=this.loggedIn = (user != null);
            this.router.navigateByUrl('/home').then((val)=>this.preventBackButton()); 
          });
          
        } 
      }
    );
  }

}
