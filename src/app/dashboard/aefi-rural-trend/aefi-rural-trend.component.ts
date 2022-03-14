import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-aefi-rural-trend',
  templateUrl: './aefi-rural-trend.component.html',
  styleUrls: ['./aefi-rural-trend.component.css']
})
export class AefiRuralTrendComponent implements OnInit {

  constructor(private common:CommonService) { }

  // Aefi report data
  AefiReportData:any;
  aefiChart:any;
  Vaccine_Date:any=[];
  Aefi:any=[];

  //Aefi Percentage
  Aefi_percent:any;

  // urban and rural data

  ngOnInit(): void {
    this.common.getData().subscribe((res:any)=>{

      // Aefi report data
            this.AefiReportData=res.last30DaysAefi;

            this.AefiReportData.forEach((ele:any)=>{
            this.Vaccine_Date.push(ele.vaccine_date);
            this.Aefi.push(ele.aefi);
            })
      
      // Aefi Percentage
          this.Aefi_percent=res.aefiPercentage;  
          
          
      // Urban and rural data
            

    })

    setTimeout(() => {
      this.aefiReport();
    }, 1000);
    
  }//ngoninit

  aefiReport(): void {
    this.aefiChart = new Chart("lineChartAefi", {
      type: 'line', //1
       data :{
        labels: this.Vaccine_Date ,
       
        datasets: [
          {
            label:"Total",
            data: this.Aefi  ,
            fill: false,
            // backgroundColor:"lightgreen",
            // borderColor: 'lightgreen',
        
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle:true,
            },
          },
          
        }
      },
  });//end chart
  
  }

}//class
