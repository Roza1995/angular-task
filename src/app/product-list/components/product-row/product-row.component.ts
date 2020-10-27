import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { Product } from './../../../core/models/product';
import { Router, ActivatedRoute} from '@angular/router';
import {DataService} from '../../../core/services';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  providers: [DataService]
})
export class ProductRowComponent implements OnInit {
  @Input() public product: any;
  @Output() onSubmit = new EventEmitter();

  public productsOnCardID = [];

  constructor( private dataservice: DataService) { }

  ngOnInit(): void {
    this.getIdFromCart();
  }

  public setCart(): any{
    return this.dataservice.sendCart(this.product.id)
      .subscribe( data => {
        this.onSubmit.emit(data);
      });
  }

  public getIdFromCart(): any{
    return this.dataservice.getCart()
      .subscribe( data => {
        data.forEach((item) => {
          this.productsOnCardID.push(item.product_id);
        });
      });

  }




}
