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
 
 
  constructor(public method: GlobalService,private route: ActivatedRoute) { }


  ngOnDestroy(){
    delete(this.method.customerData) 
    delete(this.method.customerId) 
  
  }
  ngOnInit() {
    this.method.menu = true
 
     if(!this.method.customerData){
      this.method.customerData = JSON.parse(window.localStorage.getItem("customer"))
       
      
     }
    this.id = this.route.snapshot.paramMap.get("id")
     this.method.customerId = this.route.snapshot.paramMap.get("id")
     
    let data = {
      id: this.id
    
    }
    let res:any
    var that = this
    this.method.postData(data,"get-payment.php").subscribe(Response => {
       
      res = Response.json()
    }, err =>{

    },() =>{
      that.method.payments = res
    })
  }

  payment(){
    this.method.event = "payment";
    this.method.title = "Adding Payment"
  }
  resched(){
    this.method.event = "resched";
    this.method.title = "Rescheduling"
  }
  status(){
    this.method.event = "status";
    this.method.title = "Updating Status"
  }

}
