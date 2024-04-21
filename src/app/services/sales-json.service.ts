import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalesDetail } from '../model/sales-detail';

@Injectable({
  providedIn: 'root'
})
export class SalesJsonService {

  constructor(private httpClient: HttpClient) { }

  private jsonurl = "http://localhost:3000/salesProducts"


  addData(user: SalesDetail) {
    return this.httpClient.post(this.jsonurl, user)
  }
  DeleteByID(id: any) {
    return this.httpClient.delete(this.jsonurl + "/" + id)
  }

  updateData(user: SalesDetail) {
    return this.httpClient.put(this.jsonurl + "/" + user.id, user)
  }
  getAll() {
    return this.httpClient.get(this.jsonurl);
  }
}
