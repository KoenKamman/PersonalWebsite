import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MaterialModule } from '../material/material.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MaterialModule
  ],
  declarations: [MainComponent]
})
export class PortfolioModule { }
