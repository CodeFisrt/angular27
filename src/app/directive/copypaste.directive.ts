import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCopypaste]'
})
export class CopypasteDirective {

  constructor(private ele: ElementRef) {
    
   }

  @HostListener("click")
  getText() {
    const text =  this.ele.nativeElement.innerText;
    navigator.clipboard.writeText(text).then(res=>{
      console.log("Data Copied")
    })
  }

}
