import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeDetail } from '../model/employeeDetail';

@Injectable({
  providedIn: 'root'
})
export class EmpFServiceService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/empdet";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addData(employeeD: EmployeeDetail) {
    return this.httpClient.post(this.url, employeeD, this.httpOptions);
  }

  getData() {
    return this.httpClient.get(this.url);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  update(employeeD: EmployeeDetail) {
    return this.httpClient.put(this.url + "/" + employeeD.id, employeeD)
  }

  getById(id: any) {
    return this.httpClient.get(this.url + "/" + id);
  }
}
