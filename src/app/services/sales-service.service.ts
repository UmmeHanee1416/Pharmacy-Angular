import { Injectable } from '@angular/core';
import { Sales } from '../model/sales';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesServiceService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/sales";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addData(customer: Sales) {
    return this.httpClient.post(this.url, customer);
  }

  getData() {
    return this.httpClient.get(this.url);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  update(customer: Sales) {
    return this.httpClient.put(this.url + "/" + customer.id, customer)
  }

  getById(id: any) {
    return this.httpClient.get(this.url + "/" + id);
  }

  getTotalCharge(day:any){
    return this.httpClient.get(this.url + "/weekDay/" + day);
  }

}

