import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Opportunity } from './Opportunity';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(private http: HttpClient) { }
  public host:string = "http://localhost";
  public port:string = "8080";
  public base_url : string = this.host+":"+this.port;
  getAllOpportunities() : Observable<Opportunity>{
    return this.http.get<any>(this.base_url+"/get-all-opp");
  }
  deleteOpportunity(id) {
    let header=new HttpHeaders();
    header.append('Content-Type','plain/text');
    return this.http.get<any>(this.base_url+"/delete-opp/"+id,{headers:header});
  }

  createOpportunity(data){
    //console.log(data)
    let header=new HttpHeaders();
    header.append('Content-Type','application/json');
    return this.http.post<any>(this.base_url+"/insert",data,{headers:header})
  }
  editOpportunity(data){
    console.log(data)

    return this.http.post(this.base_url+"/update",data)
  }
  sendLoginDetails(user){
    //return this
    return this.http.post(this.base_url+"/login",user);
  }
  logoutUser(user){
    return this.http.post(this.base_url+"/logout",user);
  }
  // getHeaders(){
  //   const headers = new HttpHeaders({'email':this.login.user.email,'authToken':this.login.user.authToken});
  //  // return {header:{email:this.login.user.email,authToken:this.login.user.authToken}};
  //  return headers
  // }
}
