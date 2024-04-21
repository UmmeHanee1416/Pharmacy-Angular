import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/emp";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addData(employee: Employee) {
    return this.httpClient.post(this.url, employee);
  }

  getData() {
    return this.httpClient.get(this.url);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  update(employee: Employee) {
    return this.httpClient.put(this.url + "/" + employee.id, employee)
  }

  getById(id: any) {
    return this.httpClient.get(this.url + "/" + id);
  }
}
