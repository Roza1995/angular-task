import {Product} from './../core/models/product';
import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import {DataService} from './../core/services/data.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [DataService]
})
export class ProductListComponent implements OnInit {
  public products: any = [];
  public searchText = '';
  public pageSize = 5;
  public pageIndex = 1;
  public types: any = [];
  public filteredProduct = '';
  public cartIds = [];


  constructor(private dataservice: DataService) {
  }


  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this._getProducts();
    this._searchProducts(this.searchText);
    this._getTypes();
    this.getCart();
  }


  private _getProducts(): void {
    this.dataservice.getProductsFromDB(this.pageIndex, this.pageSize, this.searchText, this.filteredProduct)
      .subscribe(data => this.products = data);
  }

  public setPage(pageNumber): void {
    this.pageIndex = pageNumber;
    this._getProducts();
  }

  public _searchProducts(searchText: string): void{
    this.searchText = searchText;
    this._getProducts();
  }

  public _filterByType(): void {
    this._getProducts();
  }


  public _getTypes(): void{
    this.dataservice.getTypes()
      .subscribe( data => this.types = data);
  }

  public getCart(): void {
    this.dataservice.getCart()
      .subscribe( data => this.cartIds = data);
  }



}
