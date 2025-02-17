import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from "./components/employee/employee.component";
import { VariablesComponent } from "./components/variables/variables.component";

@Component({
  selector: 'app-root',
  imports: [DashboardComponent, EmployeeComponent, VariablesComponent,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular27';
}
