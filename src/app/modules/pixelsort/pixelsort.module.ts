import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PixelsortRoutingModule } from './pixelsort-routing.module';
import { PixelsortComponent } from './components/pixelsort/pixelsort.component';

@NgModule({
  imports: [
    CommonModule,
    PixelsortRoutingModule
  ],
  declarations: [PixelsortComponent]
})
export class PixelsortModule { }
