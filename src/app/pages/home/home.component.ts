import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/store/user.store';
import { Category } from 'src/app/store/category.store';
import { Product } from 'src/app/store/product.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public user:User,
    public store:Product) { }

  ngOnInit() {
    this.store.fetchData();
  }

}
