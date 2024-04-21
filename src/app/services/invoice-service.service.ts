import { Injectable } from '@angular/core';
import { Invoice } from '../model/invoice';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/invoice";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addData(invoice: Invoice) {
    return this.httpClient.post(this.url, invoice);
  }

  getData() {
    return this.httpClient.get(this.url);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  update(invoice: Invoice) {
    return this.httpClient.put(this.url + "/" + invoice.id, invoice)
  }

  getById(id: any) {
    return this.httpClient.get(this.url + "/" + id);
  }


}
