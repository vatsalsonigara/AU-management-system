import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateOppDialogComponent } from '../create-opp-dialog/create-opp-dialog.component';




@Component({
  selector: 'app-create-opp',
  templateUrl: './create-opp.component.html',
  styleUrls: ['./create-opp.component.css']
})
export class CreateOppComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  
  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateOppDialogComponent, {
     
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
