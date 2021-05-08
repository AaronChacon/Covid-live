import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
