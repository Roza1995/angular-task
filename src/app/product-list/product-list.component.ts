import { Product } from './../core/models/product';
import { Component, OnInit} from '@angular/core';
import { DataService } from './../core/services/data.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ DataService ]
})
export class ProductListComponent implements OnInit {

  public products : Product[] = [];
  
  constructor(private dataservice: DataService){
  }
      

  ngOnInit(): void {
    setTimeout(this._getProducts.bind(this),1000);
  }

  private _getProducts(): void{
    this.dataservice.getProductsFromDB()
    .subscribe(data => this.products = data["products"]);
  }


}
