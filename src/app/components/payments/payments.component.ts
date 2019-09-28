import { Component, OnInit,OnDestroy } from '@angular/core';
import {GlobalService} from '../../services/global.service'
import { ActivatedRoute } from "@angular/router";
import * as $ from 'jquery'
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit,OnDestroy {
  id:any
 
  payments:any
  constructor(public method: GlobalService,private route: ActivatedRoute) { }


  ngOnDestroy(){
    delete(this.method.customerData) 
  
  }
  ngOnInit() {
     if(!this.method.customerData){
      this.method.customerData = JSON.parse(window.localStorage.getItem("customer"))
      console.log(this.method.customerData)
      
     }
    this.id = this.route.snapshot.paramMap.get("id")
   
    let data = {
      id: this.id
    
    }
    let res:any
    var that = this
    this.method.postData(data,"get-payment.php").subscribe(Response => {
       
      res = Response.json()
    }, err =>{

    },() =>{
      that.payments = res
    })
  }

}
