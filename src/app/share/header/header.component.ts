import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthService,
    private router:Router
    ) { }

  ngOnInit() {
  }
  
  logOut(){
    this.auth.signOut().then(()=>{
      this.router.navigate(['/login'])
    })
  }

}
