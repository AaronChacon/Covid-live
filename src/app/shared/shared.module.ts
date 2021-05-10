import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MapBubblesComponent } from './map-bubbles/map-bubbles.component';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    MapBubblesComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    MapBubblesComponent,
    FilterPipe
  ]
})
export class SharedModule { }
