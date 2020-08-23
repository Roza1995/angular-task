import { Component, OnInit, Input} from '@angular/core';
import { Product } from './../../../core/models/product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() public product : Product;

  constructor() { }

  ngOnInit(): void {
  }

}
