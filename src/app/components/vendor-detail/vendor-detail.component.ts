import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  imports: [],
  templateUrl: './vendor-detail.component.html',
  styleUrl: './vendor-detail.component.css'
})
export class VendorDetailComponent {

  router = inject(Router)
  constructor(private activateRoute: ActivatedRoute){
    this.activateRoute.params.subscribe((Res:any)=>{
      
    })
    const data = this.activateRoute.snapshot.params;
    

    setTimeout(() => {
      this.router.navigate(['vendor-detail',333],{skipLocationChange:true})
    }, 6000);
  }
}
