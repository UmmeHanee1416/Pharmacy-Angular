import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalesDetail } from '../model/sales-detail';

@Injectable({
  providedIn: 'root'
})
export class SalesDetailServiceService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/saledet";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addData(customer: SalesDetail) {
    return this.httpClient.post(this.url, customer, this.httpOptions);
  }

  getData() {
    return this.httpClient.get(this.url);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  update(customer: SalesDetail) {
    return this.httpClient.put(this.url + "/" + customer.id, customer)
  }

  getById(id: any) {
    return this.httpClient.get(this.url + "/" + id);
  }

  getBySales(sId: any) {
    return this.httpClient.get(this.url + "/sales/" + sId);
  }

  getTotalChargeWed(date:any){
    return this.httpClient.get(this.url + "/date/" + date);
  }
}
