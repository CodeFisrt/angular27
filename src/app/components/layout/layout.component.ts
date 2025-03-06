import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private router: Router,private user: UserService){

  }

  onLogoff() {
    sessionStorage.removeItem("27user")
    this.router.navigate(['login'])
  }

  onSerachChnage(event:any) {
    
    const serachText =  event.target.value;
    this.user.searchChange$.next(serachText);
    this.user.searchBehavor.next(serachText);
  }
}
