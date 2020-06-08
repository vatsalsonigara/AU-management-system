import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OpportunityService } from '../opportunity.service';
import { OppTableComponent } from '../opp-table/opp-table.component';

@Component({
  selector: 'app-create-opp-dialog',
  templateUrl: './create-opp-dialog.component.html',
  styleUrls: ['./create-opp-dialog.component.css']
})
export class CreateOppDialogComponent implements OnInit {
  id:number;
  oppName:string="";
  skills:string;
  manager:string;
  oppCreator:string;
  oppEmail:string;
  expInYrs:number;
  location:string;
  lastUpdated:string;
  constructor( private _oppService:OpportunityService,
    public dialogRef: MatDialogRef<CreateOppDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
  createOpportunity(){
    var oppData={};
    oppData['oppName']=this.oppName;
    oppData['location']=this.location;
    oppData['manager']=this.manager;
    oppData['oppCreator']=this.oppCreator;
    oppData['expInYrs']=this.expInYrs;
    oppData['oppEmail']=this.oppEmail;
    oppData['skills']=this.skills;
    
    console.log(oppData);
    this._oppService.createOpportunity(oppData).subscribe();
    this.dialogRef.close();
   // new OppTableComponent(this._oppService).reloadTable();
    } 
}
