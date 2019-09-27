import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http'
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  server: string = "http://192.168.1.50/phonics_server/client-script/"
  constructor(public http: Http) { }

  postData(body, file){
    let type = "application/json; charset=UTF-8"
    let headers = new Headers({'Content-Type': type})
    let options = new RequestOptions({headers: headers})

    return this.http.post(this.server + file, JSON.stringify(body), options)
  }
}
