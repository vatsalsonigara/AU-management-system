import { Component, OnInit } from '@angular/core';
import { OpportunityService } from '../opportunity.service';
import { LoginService } from '../login.service';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginSevice: LoginService,public router:Router) { }
  loggedIn: boolean=false;
  ngOnInit(): void {
    this.loggedIn=false
  }
  signOut(){
    this.loginSevice.signOut();
    this.loggedIn=false;
    this.router.navigateByUrl('/');
  }

  goToOpportunity(){
    if(this.router.url==='/home' || this.router.url==='/opportunity'  || this.router.url==='/trends'){
      this.router.navigateByUrl('/opportunity');
      
    }
    else{
      alert("Please log into your account first");
      this.router.navigateByUrl('/');
    }
  }
  goToHome(){
    if(this.router.url==='/home' || this.router.url==='/opportunity' || this.router.url==='/trends'){
      this.router.navigateByUrl('/home');
    }
    else{
      alert("Please log into your account first");
      this.router.navigateByUrl('/');
    }
  }
  goToTrends(){
    if(this.router.url==='/home' || this.router.url==='/opportunity'  || this.router.url==='/trends'){
      this.router.navigateByUrl('/trends');
    }
    else{
      alert("Please log into your account first");
      this.router.navigateByUrl('/');
    }
  }
}
