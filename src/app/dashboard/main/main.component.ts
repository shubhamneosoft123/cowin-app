import { Component, OnInit } from '@angular/core';

import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  States: any=[];
  selectedValue: any;
  city: any=[];
  state_id: any;
  stateid: any;
  sid;

  //vacc
  V_Dose_1: any;
  V_Total: any;
  V_Precaution_Dose: any;
  V_Dose_2: any;

  //sites
  SiteTotal: any;
  SiteGvt: any;
  SitePvt: any;

  //Total Registration age wise
  RegTotal: any;
  Age_15_17: any;
  Age_18_45: any;
  Age_45_above: any;


  
  constructor(private common:CommonService,) { }
 
  ngOnInit(): void {

    this.common.getData().subscribe((res:any)=>{
      //Total Vaccination
      this.V_Total=res.topBlock.vaccination.total;
      this.V_Dose_1=res.topBlock.vaccination.tot_dose_1;
      this.V_Dose_2=res.topBlock.vaccination.tot_dose_2;
      this.V_Precaution_Dose=res.topBlock.vaccination.tot_pd;

      //site conducting vaccination

       this.SiteTotal=res.topBlock.sites.total;
       this.SiteGvt=res.topBlock.sites.govt;
       this.SitePvt=res.topBlock.sites.pvt;

       //Total Registration
      
       this.RegTotal=res.topBlock.registration.total;
       this.Age_15_17=res.topBlock.registration.cit_15_17;
       this.Age_18_45=res.topBlock.registration.cit_18_45;
       this.Age_45_above=res.topBlock.registration.cit_45_above;






      
    })
      //filter dropdown

      this.common.getData().subscribe((res:any)=>{
        this.States=res.getBeneficiariesGroupBy;

         this.States.forEach((ele:any)=>{
          this.sid=ele.getBeneficiariesGroupBy.state_id;
          console.log(this.sid,"jj");
          
        })
      
      })

      this.common.getStateDAta(this.state_id).subscribe((res:any)=>{
       
        console.log(this.stateid);
        
        
      })

      
             


  }//ngoninit


  myfunc(e){
    console.log(e.target.value);
    this.selectedValue=e.target.value;  
    this.States.forEach((el:any)=>{
      // console.log(el.state_name);
      // console.log(this.selectedValue);
      
      if(this.selectedValue===el.state_id){
        
        
        
      }
     
      
    })
  }

 

}//class





