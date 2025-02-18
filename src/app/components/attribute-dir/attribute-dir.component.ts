import { NgClass, NgStyle } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-dir',
  imports: [NgClass,FormsModule,NgStyle],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent implements OnDestroy {
  div1Color: string = '';
  isActive: boolean =  false;

  className: string  = '';
  progreesValue: string = '';
  classObj: any =  {
    color:'red',
    'background-color':'green',
    'font-size':"20px"
  }

  addDiv1Color(className: string) {
    this.div1Color =  className;
  }
  ngOnDestroy(): void {
    debugger;
  }

}
