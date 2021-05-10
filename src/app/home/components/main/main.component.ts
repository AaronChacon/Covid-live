import { Component, OnInit } from '@angular/core';
import { DataCovidService } from '../../../core/services/data-covid.service';
import { CountriesService } from '../../../core/services/countries.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  country: string = 'Venezuela';
  countries: any;
  countriesData: any;
  countriesKey: any;
  dataCovid:any;

  totalConfirm = 0;
  totalDeaths = 0;
  totalRecovered = 0;


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
          console.log(data)
          
          this.dataCovid = data;

          for (const key in this.dataCovid) {
            if (Object.prototype.hasOwnProperty.call(this.dataCovid, key)) {
              const countries = this.dataCovid[key];

              //let totalconfirmed = 0
              countries.forEach((data) => {
                //console.log(data);
                this.totalConfirm += data.confirmed
                this.totalRecovered += data.recovered
                this.totalDeaths += data.deaths
              });

              /* console.log(this.totalConfirm);
              console.log(this.totalConfirm);
              console.log(this.totalConfirm); */
              
              
            }
          }

          console.log(this.totalConfirm);
          console.log(this.totalRecovered);
          console.log(this.totalDeaths);
          

        })
  }

  fetchCountries(){
    /* this.countriesService.getAllCountries()
        .subscribe(data => {
          console.log(data);
        }) */
    
    /* this.dataCovidService.getAllData()
        .subscribe( data => {
        this.countriesKey = Object.keys(data);
        console.log(this.countriesKey);
        console.log(typeof(this.countriesKey));
      })   */

  }

}
