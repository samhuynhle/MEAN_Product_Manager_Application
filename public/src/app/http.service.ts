import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  findall(){
    return this._http.get('/express')
  }
  findone(id){
    return this._http.get(`/express/${id}`);
  }
  create(formdata){
    return this._http.post('/express/', formdata);
  }
  update(id, formdata){
    return this._http.put(`/express/${id}`, formdata);
  }
  delete(id){
    return this._http.delete(`/express/${id}`);
  }
  constructor(private _http: HttpClient) { }
}
