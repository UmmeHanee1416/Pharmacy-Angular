import { Injectable } from '@angular/core';
import { ReturnedtoCompany } from '../model/returnedto-company';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReturnCompanyServiceService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/retcomp";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addData(employeeD: ReturnedtoCompany) {
    return this.httpClient.post(this.url, employeeD, this.httpOptions);
  }

  getData() {
    return this.httpClient.get(this.url);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  update(employeeD: ReturnedtoCompany) {
    return this.httpClient.put(this.url + "/" + employeeD.id, employeeD)
  }

  getById(id: any) {
    return this.httpClient.get(this.url + "/" + id);
  }
}
