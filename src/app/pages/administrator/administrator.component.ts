import { User } from 'src/app/store/user.store';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {

  constructor(private auth: AuthService,
    public user:User,
    private router: Router
    ) { }

  ngOnInit() {
  }

  logout(){
    this.auth.signOut().then(()=>{
      this.router.navigate(['/']);
    }).catch(error=>{
      alert(error);
    })
  }

}
