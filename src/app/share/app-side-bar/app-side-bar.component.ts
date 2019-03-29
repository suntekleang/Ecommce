import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/store/category.store';

@Component({
  selector: 'app-app-side-bar',
  templateUrl: './app-side-bar.component.html',
  styleUrls: ['./app-side-bar.component.scss']
})
export class AppSideBarComponent implements OnInit {

  constructor(public store:Category) { }

  ngOnInit() {
    this.store.fetchData();
  }

}
