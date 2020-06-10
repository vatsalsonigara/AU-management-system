import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { OpportunityService } from '../opportunity.service';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-opp-table',
  templateUrl: './opp-table.component.html',
  styleUrls: ['./opp-table.component.css']
})
export class OppTableComponent implements OnInit {

  columnsToDisplay: string[] = ["Title", "Location", "Experience", "Creator", "Creator Email", "Skills", "Manager"];
  displayedColumns: string[] = ['oppName', 'location', 'expInYrs', 'oppCreator', 'oppEmail', 'skills', 'manager', 'menu'];
  dataSource: any = [];
  copyData: any = []
  filter: string;
  searchData: string
  constructor(private _oppService: OpportunityService, private dialog: MatDialog) { }
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  ngOnInit(): void {
    this._oppService.getAllOpportunities()
      .subscribe(data => {
        this.dataSource = Object.assign([], data);;
        this.copyData = Object.assign([], data);;
      })
  }
  onDelete(row) {
    this._oppService.deleteOpportunity(row.id).subscribe();
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id != row.id;
    });
  }
  onSearch() {
    this.dataSource = Object.assign([], this.copyData);
    this.dataSource = this.dataSource.filter((value, key) => {
      if (this.filter == 'skills') return value.skills === this.searchData;
      else if (this.filter == 'location') return value.location === this.searchData;
      else if (this.filter == 'type') return value.oppName === this.searchData;
      else return true;
    });
  }
  onFilter(filter) {
    this.filter = filter;
  }
  reloadTable() {
    this._oppService.getAllOpportunities()
      .subscribe(data => {
        this.dataSource = Object.assign([], data);;
        this.copyData = Object.assign([], data);;
      })
  }
  openDialog(row): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      height: '450px',
      width: '600px',
      data: {
        id: row.id,
        oppName: row.oppName,
        location: row.location,
        expInYrs: row.expInYrs,
        oppCreator: row.oppCreator,
        oppEmail: row.oppEmail,
        manager: row.manager,
        skills: row.skills
      }
    });

    dialogRef.afterClosed().subscribe(result => {;
      this.ngOnInit();
    });
  }

}
