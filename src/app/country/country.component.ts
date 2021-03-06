import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IChartAreaData, IDataCountry, IDataCovid, ICountries } from '../core/interfaces/covid.interfaces';
import { DataCovidService } from '../core/services/data-covid.service';
import { IpLocationService } from '../core/services/ip-location.service';

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
  location:string;
  loadingItems = [true,true,true,true,true,true,true,true];

  
  allDataFirstChart: IChartAreaData[];
  firstChart = new BehaviorSubject<IChartAreaData[]>([]);
  firstChart$ = this.firstChart.asObservable();
  heightFirstChart = 454.4;
  colorFirstChart = ["#FF4560", "#00E396", "#FEB019", "#2E294E"];
  
  allDataSecondChart: IChartAreaData[];
  secondChart = new BehaviorSubject<IChartAreaData[]>([]);
  secondChart$ = this.secondChart.asObservable();
  heightSecondChart = 247;
  colorSecondChart = ["#FEB019"];
  
  allDataThirdChart: IChartAreaData[];
  thirdChart = new BehaviorSubject<IChartAreaData[]>([]);
  thirdChart$ = this.thirdChart.asObservable();
  heightThirdChart = 247;
  colorThirdChart = ["#2E294E"];


  

  constructor(
    private dataCovidService: DataCovidService,
    private route: ActivatedRoute,
    private router: Router,
    private ipLocationService: IpLocationService
  ) {

  }

  ngOnInit(): void {
    this.getCountryById();
    this.fetchIpLocation();
  }

  getCountryById(){
    this.route.params.subscribe(params => {
      console.log(params);
      this.country = params.id;
      this.code = params.code;
      //console.log(this.country);
      //console.log(this.code);
      this.fetchDataByCountry(this.country);
    })
  }

  fetchDataByCountry(country){
    this.dataCovidService.getCountryData(country)
        .subscribe((data:any) => {
          /* console.log(data); */
          
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
         

          this.allDataFirstChart = [allDataConfirmed, allDataRecovered, allDataActive, allDataDeaths];
          this.allDataSecondChart = [allDataActive];
          this.allDataThirdChart = [allDataDeaths];

          this.firstChart.next(this.allDataFirstChart);
          this.secondChart.next(this.allDataSecondChart);
          this.thirdChart.next(this.allDataThirdChart);
          
          this.fetchDataAllCountry();

        })
  }

  fetchDataAllCountry(){
    this.dataCovidService.getAllData()
        .subscribe((data:IDataCovid) => {

          console.log(data);
          

          this.totalConfirmed = data.Global.TotalConfirmed;

          this.countriesData = data.Countries;

          let date = new Date();
          let today = new Date(date.getTime() - 5 * 24 * 60 * 60 * 1000).toISOString();
          console.log(today);

          let filterByDate = data.Countries.filter(value => value.Date >= today);
          console.log(filterByDate);
          
          let filterByCountry = filterByDate.filter(value => value.Slug === this.country);
          console.log(filterByCountry);
          
          this.countryData = filterByCountry[0];

          console.log(this.countryData);
          
          
        });
  }

  fetchIpLocation(){
    this.ipLocationService.getIpLocation()
        .subscribe((data:any) =>{
          //console.log(data);
          this.location = data.country_name;
        })
  }

}
