import { Injectable } from '@angular/core';
import { Generic } from '../model/generic';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericServiceService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/generic";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addData(generic: Generic) {
    return this.httpClient.post(this.url, generic);
  }

  getData() {
    return this.httpClient.get(this.url);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  update(generic: Generic) {
    return this.httpClient.put(this.url + "/" + generic.id, generic)
  }

  getById(id: any) {
    return this.httpClient.get(this.url + "/" + id);
  }

}
