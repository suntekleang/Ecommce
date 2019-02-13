import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/store/user.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public user:User) { }

  ngOnInit() {
  }

}
