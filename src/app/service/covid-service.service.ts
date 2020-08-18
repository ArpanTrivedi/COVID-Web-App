import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

  urlCountry:string = "https://corona.lmao.ninja/v2/countries";
  url:string = "https://disease.sh/v3/covid-19/countries/";
  constructor(private http:HttpClient) { }
  allCountry(){
    return this.http.get(this.urlCountry);
  }
  selectCountry(name:string){
    return this.http.get((this.url+name));
  }
  worldReport(){
    return this.http.get("https://disease.sh/v3/covid-19/all");
  }
}
