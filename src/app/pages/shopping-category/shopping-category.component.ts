import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shopping } from 'src/app/store/shopping.store';

@Component({
  selector: 'app-shopping-category',
  templateUrl: './shopping-category.component.html',
  styleUrls: ['./shopping-category.component.scss']
})
export class ShoppingCategoryComponent implements OnInit {

  constructor(private router:ActivatedRoute,
    public store:Shopping
    ) { }

  ngOnInit() {
    this.router.params.forEach(param=>{
      const key=param["id"];
      this.store.fetchSelectedCategory(key);
      this.store.fetchProduct(key);
    })
  }

}
