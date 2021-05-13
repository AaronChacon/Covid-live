import { Component, OnInit } from '@angular/core';
import { DataCovidService } from '../core/services/data-covid.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  query: string;
  location = 'venezuela';
  loadingItems = [true,true,true,true,true,true,true,true];

  constructor(
    private dataCovidService: DataCovidService,
  ) { }

  ngOnInit(): void {
    this.fetchDataByCountry();
  }

  fetchDataByCountry(){
    this.dataCovidService.getCountryData()
        .subscribe(data => {
          console.log(data);
        })
  }

}
