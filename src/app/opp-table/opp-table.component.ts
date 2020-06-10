import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { OpportunityService } from '../opportunity.service';
import { Opportunity } from '../Opportunity';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

export interface OpportunityDetails {
  id: number;
  OppName: string;
  location : string
  expInYrs: number;
  creator: string;
  creatorEmail: string
  mannager: string;
}
const ELEMENT_DATA: OpportunityDetails[] = [
  {  id:1,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  { id:2, OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:3,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},

  {  id:4,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},

  {  id:5,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:6,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:7,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:8,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:9,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:10,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:11,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:12,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:13,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:14,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:15,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:16,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:17,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:18,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:19,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:20,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"},
  {  id:21,OppName:"software dev" ,location:"Hyderabad",expInYrs: 2, creator:"Vatsal", creatorEmail:"whbe@vrf.com",mannager:"test"}

];
@Component({
  selector: 'app-opp-table',
  templateUrl: './opp-table.component.html',
  styleUrls: ['./opp-table.component.css']
})
export class OppTableComponent implements OnInit {

  columnsToDisplay: string[] =["Title","Location","Experience","Creator","Creator Email","Skills","Manager"];
  displayedColumns: string[] = ['oppName', 'location', 'expInYrs', 'oppCreator','oppEmail','skills','manager','menu'];
  dataSource:any = [];
  copyData:any =[]
  filter:string;
  searchData:string
  constructor(private _oppService:OpportunityService,private dialog:MatDialog) { }
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  ngOnInit(): void {
    this._oppService.getAllOpportunities()
    .subscribe(data => {
      console.log(data);
      this.dataSource=Object.assign([], data);;
      this.copyData=Object.assign([], data);;
    })
  }
  onDelete(row){
    console.log(row);
    this._oppService.deleteOpportunity(row.id).subscribe();
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row.id;
    });
  }
  onSearch(){
    this.dataSource=Object.assign([], this.copyData);
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(this.filter=='skills') return value.skills ===this.searchData;
      else if(this.filter=='location') return value.location===this.searchData;
      else if(this.filter=='type') return value.oppName===this.searchData;
      else return true; 
    });
  }
  onFilter(filter){
    this.filter=filter;
  }
  reloadTable(){
    this._oppService.getAllOpportunities()
    .subscribe(data => {
      console.log(data);
      this.dataSource=Object.assign([], data);;
      this.copyData=Object.assign([], data);;
    })
  }
  openDialog(row): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      height: '400px',
      width: '600px',
      data :{
        id:row.id,
        oppName:row.oppName,
        location:row.location,
        expInYrs:row.expInYrs,
        oppCreator:row.oppCreator,
        oppEmail:row.oppEmail,
        manager:row.manager,
        skills:row.skills
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
    //this.reloadTable();
  }

}
