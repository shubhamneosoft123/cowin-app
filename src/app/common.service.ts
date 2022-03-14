import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

   URL="https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports";

   url="https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=2022-03-10";

  

getData(){
  return this.http.get(this.URL);
}

fetchData(){
  return this.http.get(this.url)
}

getStateDAta(state_id){
 const  stateUrl="https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id="+state_id;
 return this.http.get(stateUrl);
}


}
