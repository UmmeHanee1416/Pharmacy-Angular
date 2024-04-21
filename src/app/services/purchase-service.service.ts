import { Injectable } from '@angular/core';
import { Purchase } from '../model/purchase';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseServiceService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/purchase";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addProduct(purchase: Purchase) {
    return this.httpClient.post(this.url, purchase);
  }

  getData() {
    return this.httpClient.get(this.url);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  update(purchase: Purchase) {
    return this.httpClient.put(this.url + "/" + purchase.id, purchase)
  }

  getById(id: any) {
    return this.httpClient.get(this.url + "/" + id);
  }

}
