import { Component, OnInit } from '@angular/core';
import { IpLocationService } from '../../core/services/ip-location.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  location: string
  code: string

  constructor(
    private ipLocationService: IpLocationService
  ) { }

  ngOnInit(): void {
    this.fetchIpLocation();
  }

  fetchIpLocation(){
    this.ipLocationService.getIpLocation()
        .subscribe((data:any) =>{
          //console.log(data);
          this.location = data.country_name.toLowerCase();
          this.code = data.country_code;
        })
  }

}
