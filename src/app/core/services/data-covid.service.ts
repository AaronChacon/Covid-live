import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataCovidService {

  covidURL = environment.API_COVID;

  constructor(private httpClient: HttpClient) { }

  getAllData(): Observable<any> {
    return this.httpClient.get<any>(`${this.covidURL}/summary`);
  }

  getCountryData(country):Observable<any>{
    /*
    let initDate = '2020-01-01T00:00:00Z' 
    let date = new Date();
    let initDate = new Date(date.getTime() - 6 * 24 * 60 * 60 * 1000).toISOString();
    let endDate = new Date().toISOString();
    console.log(initDate);
    console.log(endDate); 
    
    */
    return this.httpClient.get<any>(`${this.covidURL}/total/country/${country}`)
  }

  getListCountries():Observable<any>{
    return this.httpClient.get<any>(`${this.covidURL}/countries`)
  }

}
