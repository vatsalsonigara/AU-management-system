import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../canvasjs.min';
import { OpportunityService } from '../opportunity.service';
@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  dataSource:any=[];
  constructor(private _oppService:OpportunityService) { }

  ngOnInit(): void {
    this._oppService.getAllOpportunities()
    .subscribe(data => {
      console.log(data);
      this.dataSource=Object.assign([], data);
      let chart1 = new CanvasJS.Chart("chartContainer1",this.convertAndCalculate(this.dataSource,"skills"));
      let chart2 = new CanvasJS.Chart("chartContainer2",this.convertAndCalculate(this.dataSource,"location"));
      let chart3 = new CanvasJS.Chart("chartContainer3",this.convertAndCalculate(this.dataSource,"oppName"));
      let chart4 = new CanvasJS.Chart("chartContainer4",this.convertAndCalculate(this.dataSource,"manager"));
      chart1.render();
      chart2.render();
      chart3.render();
      chart4.render();
    })
   
      
  }
  

  convertAndCalculate(oppDetails,parameter){
    var dataPoints={};
    //console.log(oppDetails[0][parameter])
    for(var i=0;i<oppDetails.length;i++){
      if(!(oppDetails[i][parameter] in dataPoints)) dataPoints[oppDetails[i][parameter]]=0;
      dataPoints[oppDetails[i][parameter]]++;
    }
    var pointData=[]
    for(var key in dataPoints){
      pointData.push({y:dataPoints[key],label:key})
    }
    console.log(pointData);
    var retdata={
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: ""
      },
      data: [{
        type: "column",
        dataPoints: pointData
      }]
    }
    return retdata;
  }
}
