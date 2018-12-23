import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public columns: number;
  public rowHeight: string;
  public routeTimeout;

  constructor(private router: Router) { }

  ngOnInit() {
    this.columns = (window.innerWidth <= 600) ? 1 : 3;
    this.rowHeight = (window.innerWidth <= 600) ? "2:1" : "fit";
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.columns = (event.target.innerWidth <= 600) ? 1 : 3;
    this.rowHeight = (window.innerWidth <= 600) ? "2:1" : "fit";
  }

  public route(route: string): void {
    clearTimeout(this.routeTimeout);
    this.routeTimeout = setTimeout(() => {
      this.router.navigate([route]);
    }, 500)
  }

}
