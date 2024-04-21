import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustServiceService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/customer";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addData(customer: Customer) {
    return this.httpClient.post(this.url, customer, this.httpOptions);
  }

  getData() {
    return this.httpClient.get(this.url);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  update(customer: Customer) {
    return this.httpClient.put(this.url + "/" + customer.contact, customer)
  }

  getById(id: any) {
    return this.httpClient.get(this.url + "/" + id);
  }
}
