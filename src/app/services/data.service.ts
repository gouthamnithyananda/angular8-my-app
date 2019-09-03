import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataService {

  constructor(private http:HttpClient) { }

  storeData(data){
    const api = `${environment.databaseURL}/data.json`;
    return this.http.post(api,data);
  }

}
