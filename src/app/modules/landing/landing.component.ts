import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public columns: number;
  public rowHeight: string;

  constructor() { }

  ngOnInit() {
    this.columns = (window.innerWidth <= 600) ? 1 : 3;
    this.rowHeight = (window.innerWidth <= 600) ? "2:1" : "fit";
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.columns = (event.target.innerWidth <= 600) ? 1 : 3;
    this.rowHeight = (window.innerWidth <= 600) ? "2:1" : "fit";
  }

}
