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

  getCountryData():Observable<any>{
    return this.httpClient.get<any>('https://api.covid19api.com/country/albania/status/confirmed?from=2020-01-01T00:00:00Z&to=2021-05-12T00:00:00Z')
  }

}
