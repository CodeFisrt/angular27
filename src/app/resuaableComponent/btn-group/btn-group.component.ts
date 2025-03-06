import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-group',
  imports: [],
  templateUrl: './btn-group.component.html',
  styleUrl: './btn-group.component.css'
})
export class BtnGroupComponent {

  @Input() btnList : string[] = []

  @Output() onBtnClicked = new EventEmitter<string>();
  selectedBtnText: string = "";


  onBtnSelect(btnName: string) {
    
    this.selectedBtnText = btnName;
    this.onBtnClicked.emit(btnName)
  }
}
