import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-registartion-trends',
  templateUrl: './registartion-trends.component.html',
  styleUrls: ['./registartion-trends.component.css']
})
export class RegistartionTrendsComponent implements OnInit {

  constructor(private common:CommonService) { }

  // Time wise Todays Registration Trends 
  ageChart:any; //chart name
  RegistrationData:any; //storing all fetched cowin Api data
  RegTimeLabel:any=[]   // and this are array type variable to store perticular data
  TotalRegi:any=[];
  age_15:any=[]
  age_18:any=[];
  age_45:any=[];
  age_60:any=[];

  ngOnInit(): void {

    // Time wise Todays Registration Trends 
    this.common.getData().subscribe((res:any)=>{
      this.RegistrationData=res.timeWiseTodayRegReport;
      
      this.RegistrationData.forEach((ele:any)=>{
        this.TotalRegi.push(ele.total);
        this.RegTimeLabel.push(parseInt(ele.label)+1);
        this.age_15.push(ele.age15);
        this.age_18.push(ele.age18);
        this.age_45.push(ele.age45);
        this.age_60.push(ele.age60);
      })
      
       // Time wise 30 Dys Registration Trends 

       setTimeout(() => {
        this.RegisterTrend();
      }, 500);
       
  })

}//ngOnit
RegisterTrend():void{
  this.ageChart = new Chart("lineChart", {

  type: 'line',
  data: {
    labels: this.RegTimeLabel,
    datasets: [
      {
        label: 'Total',
        data: this.TotalRegi,
        // backgroundColor: 'rgb(255, 99, 132)',
        // borderColor: 'rgb(255, 99, 132)',
      },
      {
        label: '15-17',
        data: this.age_15,
        // backgroundColor: 'orange',
        // borderColor: 'orange',
      },
      {
        label: '18-45',
        data: this.age_18,
        // backgroundColor: 'skyblue',
        // borderColor: 'skyblue',
      },
      {
        label: '45-60',
        data: this.age_45,
        // backgroundColor: 'green',
        // borderColor: 'green',
      },
      {
        label: '60 Above',
        data: this.age_60,
        // backgroundColor: 'red',
        // borderColor: 'red',
      },
      
    ]
  },
  options: {
   
    plugins:{
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
      },
    },
  }
    
  }


  })
}
}
