import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-product',
  templateUrl: './shopping-product.component.html',
  styleUrls: ['./shopping-product.component.scss']
})
export class ShoppingProductComponent implements OnInit {
@Input() fileUrl:any;
@Input() name:any;
@Input() price:any;
@Input() currency:any;
@Input() addToCart:any;

  constructor() { }

  ngOnInit() {
  }

}
