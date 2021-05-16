import { Component, OnInit } from '@angular/core';
import { INewsData } from 'src/app/core/interfaces/covid.interfaces';
import { NewsService } from '../../../core/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  listNews: INewsData[] = [];
  listDummy = [true, true, true]

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.fetchNews()
  }

  fetchNews(){
    this.newsService.getNews()
    .subscribe((data:any) => {
      this.listNews = data.articles;

      console.log(this.listNews);
      
      
    })
  }


}
