import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {
  
  @Input() regEx: string = "";

  constructor(private ele: ElementRef) { }

  @HostListener('input',['$event'])
  onChnage(event:any) {
    
    const currentVal = this.ele.nativeElement.value;
     
    this.ele.nativeElement.value =  currentVal.replace(/[^0-9]/g,'')
    
  }

}
