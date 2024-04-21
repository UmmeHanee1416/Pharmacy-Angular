import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DocServiceService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/doctor";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addData(doctor: Doctor) {
    return this.httpClient.post(this.url, doctor, this.httpOptions);
  }

  getData() {
    return this.httpClient.get(this.url);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  update(doctor: Doctor) {
    return this.httpClient.put(this.url + "/" + doctor.id, doctor)
  }

  getById(id: any) {
    return this.httpClient.get(this.url + "/" + id);
  }
}
