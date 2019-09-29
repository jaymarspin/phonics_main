import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http'
import {AuthServiceService} from '../services/auth-service.service'
import { Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  dater:any
  positions:any
  id:any
  collectibles:any
  customerData:any
  payments:any
  server: string = "http://192.168.1.50/phonics_server/client-script/"
  customerId:any
  event:any
  title:any
  refresh:any = false
  menu:any = false
  constructor(public router: Router,public auth:AuthServiceService,public http: Http) {
    this.positions = new Array()
   }

   signout(){
    var fname = window.localStorage.getItem("fname")
    if(fname == "" || fname == null || fname == undefined){
      this.auth.logged = false
      this.router.navigate(["/login"])
    } 
   }

  postData(body, file){
    let type = "application/json; charset=UTF-8"
    let headers = new Headers({'Content-Type': type})
    let options = new RequestOptions({headers: headers})

    return this.http.post(this.server + file, JSON.stringify(body), options)
  }
}
