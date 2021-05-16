import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsUrl = environment.API_NEWS 

  constructor(
    private httpClient: HttpClient
  ) { }

  getNews(){
    const   today = new Date();
    const   date = `${today.getFullYear()}-${(today.getMonth()+1)}-${today.getDate()}`;
    const   key = 'c09297288db04069b21f334d3fbd18bc'; 
    const apiUrl = `${this.newsUrl}/everything?q=coronavirus&from=${date}&sortBy=relevancy&language=en&apiKey=${key}`;
    return this.httpClient.get<any>(apiUrl);
  }
}
