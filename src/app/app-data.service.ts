import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDataService {

  constructor(private httpClient : HttpClient) { }

  getComparsionModelData():Observable<any>{
    return this.httpClient.get("assets/json/modelComparison.json");
  }

}