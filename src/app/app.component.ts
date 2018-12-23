import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'Koen Kamman';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/github.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "gitlab",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/gitlab.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "k_logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/k_logo.svg")
    );
  }

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
