import { Component, OnInit, Output } from '@angular/core';
import { ICountries, IDataCovid, IMapCountries } from 'src/app/core/interfaces/covid.interfaces';
import { DataCovidService } from '../../../core/services/data-covid.service';
import { IpLocationService } from '../../../core/services/ip-location.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  dataCovid:IDataCovid;
  currentDate:string;
  countries:ICountries[];

  totalConfirmed = 0;
  totalDeaths = 0;
  totalRecovered = 0;

  trendingConfirmed:number;
  trendingRecovered:number;
  trendingDeaths:number;

  @Output() mapDataCountries:IMapCountries[];
  location: string;
  query: string;
  loadingItems = [true,true,true,true,true,true,true,true]



  constructor(
    private dataCovidService: DataCovidService,
    private ipLocationService: IpLocationService,
  ) { }

  ngOnInit(): void {
    this.fetchCovidData();
    this.fetchIpLocation();
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

            let color = country.TotalConfirmed > 25000 ? "#FF3E29" : "#00DB75";

            let value = {
              id: country.CountryCode,
              name: country.Country,
              value: country.TotalConfirmed,
              color: color
            }
            return value
      
          });

          console.log(this.mapDataCountries);

        })
  }

  fetchIpLocation(){
    this.ipLocationService.getIpLocation()
        .subscribe((data:any) =>{
          console.log(data);
          this.location = data.country_name;
        })
  }

  

  

}
