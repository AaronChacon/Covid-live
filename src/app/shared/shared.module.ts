import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MapBubblesComponent } from './map-bubbles/map-bubbles.component';




@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    MapBubblesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    MapBubblesComponent
  ]
})
export class SharedModule { }
