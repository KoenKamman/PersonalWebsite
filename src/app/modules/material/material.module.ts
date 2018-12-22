import { NgModule } from '@angular/core';
import { MatToolbarModule, MatRippleModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
