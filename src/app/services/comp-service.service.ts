import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompServiceService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/company";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addData(company: Company) {
    return this.httpClient.post(this.url, company, this.httpOptions);
  }

  getData() {
    return this.httpClient.get(this.url);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  update(company: Company) {
    return this.httpClient.put(this.url + "/" + company.name, company)
  }

  getById(id: any) {
    return this.httpClient.get(this.url + "/" + id);
  }
}
