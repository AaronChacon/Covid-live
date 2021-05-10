import { Component, OnInit, Output } from '@angular/core';
import { DataCovidService } from '../../../core/services/data-covid.service';
import { CountriesService } from '../../../core/services/countries.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  country: string;
  countries: any;
  countriesData: any;
  countriesKey: any;
  dataCovid:any;

  totalConfirmed = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  currentDate:any;

  trendingConfirmed:any;
  trendingRecovered:any;
  trendingDeaths:any;

  @Output() mapDataCountries:any;


  constructor(
    private dataCovidService: DataCovidService,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.fetchCovidData();
    this.fetchCountries();
  }

  fetchCovidData(){
    this.dataCovidService.getAllData()
        .subscribe(data => {
          
          //All data
          this.dataCovid = data;
          console.log(this.dataCovid)

          //Totals data
          this.totalConfirmed = this.dataCovid.Global.TotalConfirmed;
          this.totalRecovered = this.dataCovid.Global.TotalRecovered;
          this.totalDeaths = this.dataCovid.Global.TotalDeaths;
          
          //Date
          this.currentDate = this.dataCovid.Date;

          //New data
          let newConfirmed = this.dataCovid.Global.NewConfirmed;
          let newRecovered = this.dataCovid.Global.NewRecovered;
          let newDeaths = this.dataCovid.Global.NewDeaths;

          //Trending
          this.trendingConfirmed = (newConfirmed * 100) / this.totalConfirmed;
          this.trendingRecovered = (newRecovered * 100) / this.totalRecovered;
          this.trendingDeaths = (newDeaths * 100) / this.totalDeaths;

          
          //Countries
          this.countries = this.dataCovid.Countries
          console.log(this.countries)

          //MapCountries
          this.mapDataCountries = this.countries.map(country => {
            let value = {
              id: country.CountryCode,
              name: country.Country,
              value: country.TotalConfirmed,
              color: "#FF3E29"
            }
            return value
      
          });

          console.log(this.mapDataCountries);
          

          /* let mapData = [
            { "id":"AF", "name":"Afghanistan", "value":32358260, "color": "#FF3E29" },
          ] */

        })
  }

  fetchCountries(){
    /* this.countriesService.getAllCountries()
        .subscribe(data => {
          console.log(data);
        }) */

  }

  filterByCountry(){
    this.countries.filter( value => {
      
    })
    //country
  }

}
