import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-directives',
  imports: [NgFor,NgIf,NgTemplateOutlet],
  templateUrl: './ng-directives.component.html',
  styleUrl: './ng-directives.component.css'
})
export class NgDirectivesComponent {

  cityList: string[] = [];
  isActive: boolean = false;
  stateList: string [] = ["Maha","Goa","Mp"]

  constructor() {
    setTimeout(() => {
      this.cityList = ["Thane","Nagpur","Jaipur",'Noida',"Delhi","Mumbai",'Pune']
    }, 2000);
  }
}
