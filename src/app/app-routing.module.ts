import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'pixelsort', loadChildren: './modules/pixelsort/pixelsort.module#PixelsortModule' },
  { path: 'portfolio', loadChildren: './modules/portfolio/portfolio.module#PortfolioModule' },
  { path: '', loadChildren: './modules/landing/landing.module#LandingModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}