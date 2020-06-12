import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Opportunity } from '../Model/Opportunity';
import { SocialUser } from 'angularx-social-login';
import { share } from 'rxjs/operators';
import {environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(private http: HttpClient) { }
  public host:string = environment.host;
  public port:string = environment.port;
  public base_url : string = this.host+":"+this.port;
  public name:string=localStorage.getItem('name');
  public authtoken:string=localStorage.getItem('authtoken');;
  public email:string=localStorage.getItem('email');;
  getAllOpportunities() : Observable<Opportunity>{
    let header=this.getHeaders();
    return this.http.get<any>(this.base_url+"/get-all-opp",{params:header}).pipe(share());
  }
  deleteOpportunity(id): Observable<any> {
    let header=this.getHeaders();
    return this.http.get<any>(this.base_url+"/delete-opp/"+id,{params:header}).pipe(share());
  }

  createOpportunity(data): Observable<any>{
    let header=this.getHeaders()
    return this.http.post<any>(this.base_url+"/insert",data,{params:header}).pipe(share());
  }
  editOpportunity(data): Observable<any>{
    let header=this.getHeaders()
    return this.http.post<any>(this.base_url+"/update",data,{params:header}).pipe(share());
  }
  sendLoginDetails(data:SocialUser): Observable<any>{
    let header={
      'email':data.email,
      'name':data.name,
      'authtoken':data.authToken,
      'login':'true',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Expose-Headers': '*',
      'Content-Type': 'application/json',
      'responseType': 'json'
    } 

    localStorage.setItem('name',data.name);
    localStorage.setItem('authtoken',data.authToken);
    localStorage.setItem('email',data.email);

    return this.http.get<any>(this.base_url+"/login",{params:header,observe: 'response'}).pipe(share())
  }
  logoutUser(user){
    localStorage.clear()
    return this.http.post(this.base_url+"/logout",user).pipe(share());
  }
  getHeaders(){
    return {
      'email':localStorage.getItem('email'),
      'name':localStorage.getItem('name'),
      'authtoken':localStorage.getItem('authtoken'),
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Expose-Headers': '*',
      'Content-Type': 'application/json',
      'responseType': 'json'
    };
  }
}
