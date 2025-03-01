import { Component } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { HighlightDirective } from '../../directive/highlight.directive';
import { NumberonlyDirective } from '../../directive/numberonly.directive';
import { CopypasteDirective } from '../../directive/copypaste.directive';

@Component({
  selector: 'app-dashboard',
  imports: [EmployeeComponent,HighlightDirective,NumberonlyDirective,CopypasteDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {

}
