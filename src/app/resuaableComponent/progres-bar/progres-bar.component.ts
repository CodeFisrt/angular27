import { NgClass, NgStyle } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-progres-bar',
  imports: [NgStyle,NgClass],
  templateUrl: './progres-bar.component.html',
  styleUrl: './progres-bar.component.css'
})
export class ProgresBarComponent {

  @Input() progressValue: string = "";
  @Input() className: string = "";
}
