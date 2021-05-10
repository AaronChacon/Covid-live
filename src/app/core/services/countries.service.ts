import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countriesURL = environment.API_COUNTRIES;

  constructor(private httpClient: HttpClient) { }

  getAllCountries(): Observable<any>{
    return this.httpClient.get<any>(this.countriesURL)
  }

  
}
