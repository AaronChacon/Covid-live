import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IChartAreaData, IDataCountry, IDataCovid, ICountries } from '../core/interfaces/covid.interfaces';
import { DataCovidService } from '../core/services/data-covid.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  query: string;
  code: string;
  country: string;
  totalConfirmed: number;
  countryData: ICountries;
  countriesData: ICountries[];
  location = 'venezuela';
  loadingItems = [true,true,true,true,true,true,true,true];

  @Output() allDataFirstChart: IChartAreaData[];

  constructor(
    private dataCovidService: DataCovidService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getCountryById();
    this.fetchDataAllCountry();

    
  }

  getCountryById(){
    this.route.paramMap
        .subscribe((params: ParamMap) => {
          this.country = params.get('id');
          this.code = params.get('code');
          console.log(this.country);
          console.log(this.code);
          this.fetchDataByCountry(this.country);
        })
  }

  fetchDataByCountry(country){
    this.dataCovidService.getCountryData(country)
        .subscribe((data:any) => {
          console.log(data);
        
          let dataConfirm =  data.map((country:IDataCountry) => {
            let confirm = country.Confirmed;
            let date = new Date(country.Date).getTime();
            let value = [date,confirm];
            return value;
          });

          let allDataConfirmed = {
            name: "Confirmed",
            data: dataConfirm
          }
          
          let dataRecovered =  data.map((country:IDataCountry) => {
            let recovered = country.Recovered;
            let date = new Date(country.Date).getTime();
            let value = [date,recovered];
            return value;
          });

          let allDataRecovered = {
            name: "Recovered",
            data: dataRecovered
          }
          
          let dataActive =  data.map((country:IDataCountry) => {
            let active = country.Active;
            let date = new Date(country.Date).getTime();
            let value = [date,active];
            return value;
          });

          let allDataActive = {
            name: "Active",
            data: dataActive
          }
          
          let dataDeaths=  data.map((country:IDataCountry) => {
            let deaths = country.Deaths;
            let date = new Date(country.Date).getTime();
            let value = [date,deaths];
            return value;
          });

          let allDataDeaths = {
            name: "Deaths",
            data: dataDeaths
          }
          
          /* 
          console.log(allDataConfirmed);
          console.log(allDataRecovered);
          console.log(allDataActive);
          console.log(allDataDeaths); 
          */

          this.allDataFirstChart = [allDataConfirmed, allDataRecovered, allDataActive, allDataDeaths]
          

        })
  }

  fetchDataAllCountry(){
    this.dataCovidService.getAllData()
        .subscribe((data:IDataCovid) => {

          console.log(data);

          this.totalConfirmed = data.Global.TotalConfirmed;

          this.countriesData = data.Countries;

          console.log(this.countriesData);
          

          let date = new Date();
          let today = new Date(date.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString();
          /* console.log(today); */

          let filterByDate = data.Countries.filter(value => value.Date >= today);
          //console.log(filterByDate);
          
          let filterByCountry = filterByDate.filter(value => value.Slug === this.country);
          //console.log(filterByCountry);
          
          this.countryData = filterByCountry[0];

          console.log(this.countryData);
          
        });
  }

}
