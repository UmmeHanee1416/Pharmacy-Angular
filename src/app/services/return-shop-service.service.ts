import { Injectable } from '@angular/core';
import { ReturnedProduct } from '../model/returned-product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReturnShopServiceService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/retpro";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addData(retShop: ReturnedProduct) {
    return this.httpClient.post(this.url, retShop, this.httpOptions);
  }

  getData() {
    return this.httpClient.get(this.url);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  update(retShop: ReturnedProduct) {
    return this.httpClient.put(this.url + "/" + retShop.id, retShop)
  }

  getById(id: any) {
    return this.httpClient.get(this.url + "/" + id);
  }

  getAllCustomer(id: any) {
    return this.httpClient.get(this.url + "/product/" + id);
  }
}
