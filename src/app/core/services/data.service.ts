import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class DataService {

  constructor(private http: HttpClient) { }

  public getProductsFromDB(): Observable<any>{
    return this.http.get('./assets/json/data.json');
  }

}