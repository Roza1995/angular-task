import { Component, OnInit } from '@angular/core';
import {DataService} from '../../core/services';
import {Product} from '../../core/models';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  public carts = [];

  constructor(private dataService: DataService ) { }

  ngOnInit(): any {
    return this.dataService.getCartProd()
      .subscribe( data => this.carts = data);
  }

}
