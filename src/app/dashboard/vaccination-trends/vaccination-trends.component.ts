import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-vaccination-trends',
  templateUrl: './vaccination-trends.component.html',
  styleUrls: ['./vaccination-trends.component.css']
})
export class VaccinationTrendsComponent implements OnInit {
//vaccin trend ByDoses
  doseChart:any;
  vaccineTotal:any=[];
  vacCount:any=[];
  vacLabel:any=[];
  doseOne:any=[];
  doseTwo:any=[];
  dosePD:any=[];

// vaccin Trend By Age
  ageChart:any;
  byAgeTotal:any;
  vacAgeTimeLabel:any=[]
  ageTotal:any=[];
  age15_17:any=[]
  age18_45:any=[];
  age45_60:any=[];
  ageAbove_60:any=[];


  constructor(private common:CommonService) { }

  ngOnInit(): void {
   
     this.common.getData().subscribe((res:any)=>{

        //vaccin trend ByAge
      this.vaccineTotal=res.vaccinationDoneByTime;
      this.vaccineTotal.forEach((ele:any)=>{
          this.vacCount.push(ele.count);
          this.vacLabel.push(parseInt(ele.label)+1);
          this.doseOne.push(ele.dose_one);
          this.doseTwo.push(ele.dose_two);
          this.dosePD.push(ele.dose_pd);
      })
       //By Age Data
       this.byAgeTotal = res.vaccinationDoneByTimeAgeWise;
       this.byAgeTotal.forEach((ele:any) => {
         this.ageTotal.push(ele.total);
         this.vacAgeTimeLabel.push(parseInt(ele.label)+1);
         this.age15_17.push(ele.vac_15_17);
         this.age18_45.push(ele.vac_18_45);
         this.age45_60.push(ele.vac_45_60);
         this.ageAbove_60.push(ele.vac_60_above);
       })
    
      

    })

    setTimeout(() => {
      this.vaccinaTrendByDose();
      this.vaccinaTrendByAge();
    }, 500);
  
  }
  vaccinaTrendByDose():void{
    this.doseChart = new Chart("barChart", {
  
    type: 'line',
    data: {
      labels: this.vacLabel,
      datasets: [
        {
          label: 'Total Doses',
          
          data: this.vacCount,
          // backgroundColor: 'rgb(255, 99, 132)',
          // borderColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Dose 1',
          data: this.doseOne,
          // backgroundColor: 'orange',
          // borderColor: 'orange',
        },
        {
          label: 'Dose 2',
          data: this.doseTwo,
          // backgroundColor: 'skyblue',
          // borderColor: 'skyblue',
        },
        {
          label: 'Precaution Dose',
          data: this.dosePD,
          // backgroundColor: 'rgb(255, 99, 132)',
          // borderColor: 'rgb(255, 99, 132)',
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

  vaccinaTrendByAge():void{
    this.ageChart = new Chart("barChart", {
  
    type: 'line',
    data: {
      labels: this.vacAgeTimeLabel,
      datasets: [
        {
          label: 'Total',
          data: this.ageTotal,
          // backgroundColor: 'rgb(255, 99, 132)',
          // borderColor: 'rgb(255, 99, 132)',
        },
        {
          label: '15-17',
          data: this.age15_17,
          // backgroundColor: 'orange',
          // borderColor: 'orange',
        },
        {
          label: '18-45',
          data: this.age18_45,
          // backgroundColor: 'skyblue',
          // borderColor: 'skyblue',
        },
        {
          label: '45-60',
          data: this.age45_60,
          // backgroundColor: 'green',
          // borderColor: 'green',
        },
        {
          label: '60 Above',
          data: this.ageAbove_60,
          //  backgroundColor: 'blue',
          //  borderColor: 'blue',
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

  
  toggleChart(selectedChart:string){
    if(selectedChart=='age'){
      this.doseChart.destroy()
      this.vaccinaTrendByAge();
    }else{
      this.ageChart.destroy();
      this.vaccinaTrendByDose();
    }
  
  }

}//class end
