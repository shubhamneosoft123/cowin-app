import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit {
  //By Genender
  vacccinByGender:any;
  genderData:any=[];
  genderChart:any;


  //By Type
  vaccinByType:any;
  typeData:any=[]
  typeChart:any;

  // By Age
  vaccineByAge:any;
  ageChart:any;

  constructor(private common:CommonService) { }

  ngOnInit():void {
  

   this.common.getData().subscribe((res:any) => {
      // vaccination By Gender
            this.vacccinByGender=res.topBlock.vaccination;
            this.genderData.push(
            this.vacccinByGender.male,
            this.vacccinByGender.female,
            this.vacccinByGender.others)
      
      //  vaccination by Type
            this.vaccinByType=res.topBlock.vaccination;
            this.typeData.push(
            this.vaccinByType.covishield,
            this.vaccinByType.covaxin,
            this.vaccinByType.sputnik)
      
      // vaccination By Age

            this.vaccineByAge=res.vaccinationByAge;
       
        
})

   Chart.register(...registerables);
   setTimeout(() => {
    this.vaccinationByGender();
    this.vaccinationByType();
    this.vaccinationByAge();
  }, 500);




}

vaccinationByGender(): void {
  this.genderChart = new Chart("pieChart", {
    type: 'pie',
     data :{
      labels: [
        'Males',
        'Females',
        'Otherss'
      ],
      datasets: [
        {
          data: this.genderData, 
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4,
        },  
      ],
      
    },
    options: {
      responsive: true,
      plugins: {
        legend: { 
          position: 'right',
          labels: {
            usePointStyle: true,
          },
        },
        title: {
          display: false,
          text: 'Chart.js Doughnut Chart'
        }
      }
    },
    
});

}

vaccinationByType(): void {
  this.typeChart = new Chart("donChart", {
    type: 'doughnut',
     data :{
      labels: [
        'Covidshield',
        'Covaccine',
        'Sputnik'
      ],
      datasets: [
        {
          data: this.typeData, 
          backgroundColor: [
            'rgb(255, 99, 111)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            usePointStyle: true,
          },
        },
        title: {
          display: false,
          text: 'Chart.js Doughnut Chart'
        }
      }
    },
});//end chart

}

vaccinationByAge():void{
  this.ageChart = new Chart("stackChart", {

  type: 'bar',
  data: {
    labels: ['Vaccinated',],
    datasets: [
      {
        label: '15-17',
        data: [this.vaccineByAge.vac_15_17],
        backgroundColor: '#111',
      },
      {
        label: '18-45',
        data: [this.vaccineByAge.vac_18_45],
        backgroundColor: '#252a8f',
      },
      {
        label: '45-60',
        data: [this.vaccineByAge.vac_45_60],
        backgroundColor: '#22a6f2',
      },
      {
        label: 'Above 60',
        data: [this.vaccineByAge.above_60],
        backgroundColor: '#22d6f2',
      },
      
    ]
  },
  options: {
    scales: {
      xAxes: { stacked: true },
      yAxes: { stacked: true }
    },
    plugins:{
    legend: {
      position: 'right',
      labels: {
        usePointStyle: true,
      },
    },
  }
    
  }


  })
}
}//class end
