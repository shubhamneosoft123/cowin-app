import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-coverage-by-state',
  templateUrl: './coverage-by-state.component.html',
  styleUrls: ['./coverage-by-state.component.css']
})
export class CoverageByStateComponent implements OnInit {

  Vacc_State_Data:any=[];
  constructor(private common:CommonService) { }

  ngOnInit(): void {

       this.common.getData().subscribe((res:any)=>{
        this.Vacc_State_Data=res.getBeneficiariesGroupBy;
      
    })
  }

}
