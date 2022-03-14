import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { MychartComponent } from './mychart/mychart.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { VaccinationTrendsComponent } from './vaccination-trends/vaccination-trends.component';
import { RegistartionTrendsComponent } from './registartion-trends/registartion-trends.component';
import { AefiRuralTrendComponent } from './aefi-rural-trend/aefi-rural-trend.component';
import { CoverageByStateComponent } from './coverage-by-state/coverage-by-state.component';




@NgModule({
  declarations: [
    NavbarComponent,
    MainComponent,
    FooterComponent,
    MychartComponent,
    VaccinationTrendsComponent,
    RegistartionTrendsComponent,
    AefiRuralTrendComponent,
    CoverageByStateComponent,
   
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  
  ],
  exports:[
    NavbarComponent,
    MainComponent,
    FooterComponent,
    MychartComponent,
    VaccinationTrendsComponent,
    RegistartionTrendsComponent,
    AefiRuralTrendComponent,
    CoverageByStateComponent,
   
   
  ]
})
export class DashboardModule { }
