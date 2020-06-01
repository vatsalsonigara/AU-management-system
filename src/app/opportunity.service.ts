import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Opportunity } from './Opportunity';


@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(private http: HttpClient) { }
  public host:string = "http://localhost";
  public port:string = "8080";
  public base_url : string = this.host+":"+this.port;
  getAllOpportunities() : Observable<Opportunity>{
    return this.http.get<any>(this.base_url+"/get-all-opp")
  }
  deleteOpportunity(id) {
    return this.http.get<any>(this.base_url+"/delete-opp/"+id);
  }
  createOpportunity(data){
    console.log(data)

    return this.http.post(this.base_url+"/insert",data)
  }
}
