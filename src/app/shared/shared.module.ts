import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MapBubblesComponent } from './map-bubbles/map-bubbles.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ChartAreaComponent } from './chart-area/chart-area.component';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    MapBubblesComponent,
    SearchFilterPipe,
    ChartAreaComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    NgApexchartsModule,
  ],
  exports: [
    NavComponent,
    FooterComponent,
    MapBubblesComponent,
    SearchFilterPipe,
    ChartAreaComponent
  ]
})
export class SharedModule { }
