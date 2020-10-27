import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Product} from '../models';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  public apiUrl: any;
  public product: Product;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public getProductsFromDB(pageIndex: number, pageSize: number, searchText: string, filteredProduct: string): Observable<any> {
    let url = this.apiUrl + `/products?page=${pageIndex}&limit=${pageSize}`;
    if (searchText) {
      url += `&search=${searchText}`;
    }

    if (filteredProduct){
      url += `&filteredProduct=${filteredProduct}`;
    }
    
    return this.http.get(url);
  }

  public getTestimonials(): Observable<any> {
    return this.http.get(this.apiUrl + '/testimonials');
  }

  public getProductById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + `/products/${id}`);
  }

  public getTypes(): Observable<any>{
    return this.http.get(this.apiUrl + '/type');
  }

  public register(data): Observable<any>{
    return this.http.post(this.apiUrl + '/register', data);
  }

  public sendCart(id: number): Observable<any>{
    return this.http.post( this.apiUrl + `/cart?product_id=${id}`, id);
  }

  public getCart(): Observable<any>{
    return this.http.get(this.apiUrl + '/carts');
  }

  public getCartProd(): Observable<any>{
    return this.http.get(this.apiUrl + '/bucket');
  }

}