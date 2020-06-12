import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateOppDialogComponent } from '../create-opp-dialog/create-opp-dialog.component';
import { OpportunityService } from 'src/app/Services/opportunity.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
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

  ngOnInit(): void {
    this.id=this.data.id;
    this.skills=this.data.skills;
    this.manager=this.data.manager;
    this.oppCreator=this.data.oppCreator
    this.oppEmail=this.data.oppEmail;
    this.location=this.data.location;
    this.oppName=this.data.oppName;
    this.expInYrs=this.data.expInYrs;
  }

  editOpportunity(){
    var oppData={};
    oppData['oppName']=this.oppName;
    oppData['location']=this.location;
    oppData['manager']=this.manager;
    oppData['oppCreator']=this.oppCreator;
    oppData['expInYrs']=this.expInYrs;
    oppData['oppEmail']=this.oppEmail;
    oppData['skills']=this.skills;
    oppData['id']=this.id;
    if(!this.checkValidation(oppData)) return;
    this._oppService.editOpportunity(oppData).subscribe();
    this.dialogRef.close();
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
  checkValidation(oppData):boolean{
    for(var key in oppData){
      if(oppData[key]==='') return false;
    }
    if(oppData['expInYrs']===null) return false;
    return true;
  }
}
