import { Products } from './../model/products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/product";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addProduct(product: Products) {
    return this.httpClient.post(this.url, product);
  }

  getData() {
    return this.httpClient.get(this.url);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  update(product: Products) {
    return this.httpClient.put(this.url + "/" + product.tradeName, product)
  }

  getById(id: any) {
    return this.httpClient.get(this.url + "/" + id);
  }

  gettradeNremQ() {
    return this.httpClient.get(this.url + "/tnameremQ")
  }
}
