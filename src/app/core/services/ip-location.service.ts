import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpLocationService {

  ipUrl = environment.API_IP_CHECK; 

  constructor(
    private httpClient: HttpClient,
  ) { }

  getIpLocation(): Observable<any>{
    return this.httpClient.get<any>(this.ipUrl);
  }
}
