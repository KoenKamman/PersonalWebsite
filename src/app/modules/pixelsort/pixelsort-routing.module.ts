import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PixelsortComponent } from './components/pixelsort/pixelsort.component';

const routes: Routes = [
  { path: '',  component: PixelsortComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PixelsortRoutingModule { }
