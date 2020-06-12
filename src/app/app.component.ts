import { Component } from '@angular/core';
import { 
  faCoffee,
  faCalculator, faBolt
 } from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub
 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kalkulator-listrik';
  faCoffee = faCoffee;
  faGithub = faGithub;
  faCalculator = faCalculator;
  faBolt = faBolt;
}
