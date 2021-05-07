import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { MainComponent } from './components/main/main.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './components/info/info.component';
import { FAQComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    MainComponent,
    InfoComponent,
    FAQComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ]
})
export class HomeModule { }
