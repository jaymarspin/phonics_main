import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service'
import * as $ from 'jquery'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  //payment
  expense:any
  particular:any
  amount:any
  or:any
  dater:any

  resched:any
  status:any
  statusCollection:any
  constructor(public method: GlobalService) {
    this.statusCollection = new Array("Active","Repo","Paid")
   }

  ngOnInit() {
    this.dater = this.method.dater
    
  }

  submit(){
    if(this.method.event == "payment"){
        this.addPayment()
    }else if(this.method.event == "resched"){
      this.addResched();
    }else if(this.method.event == "status"){
      this.updateStatus();
    }
    
  }
  updateStatus(){
     let data = {
      status: this.status,
      cust_id: this.method.customerId
     }
     let res:any
      var that = this
      $("body #cover-spin").fadeIn(200)
      this.method.postData(data,"update-status.php").subscribe(Response =>{
        console.log(Response)
        res = Response.json()
      },err =>{ 
        alert("Network Error! "+err)
      },() =>{
        $("body #cover-spin").fadeOut(200)
        if(res.message == "success"){
          that.method.customerData.customer.status = this.status
          that.method.refresh = true
          alert("Successfully recorded")
        }else{
          alert(res.message)
        }
      })
  }
  addResched(){
    if(this.resched != undefined && this.resched != null && this.resched != ""){
      let data = {
        dater: this.resched,
        cust_id: this.method.customerId
      }
      let res:any
      var that = this
      $("body #cover-spin").fadeIn(200)
      this.method.postData(data,"reshed.php").subscribe(Response =>{
        
        res = Response.json()
      }, err =>{
        alert("Network Error! "+err)
      },() =>{
        $("body #cover-spin").fadeOut(200)
          if(res.message == "success"){
            alert("Successfuly recorded")
            delete(that.resched)
          }
      })
    }else{
      alert("Add a date")
    }
  }
  addPayment(){
    if(this.expense != undefined && this.expense != 0 && this.particular != "" && this.particular != undefined && this.amount != 0 && this.amount != undefined && this.or != "" && this.or != undefined
        && this.dater != undefined && this.dater != ""
      ){
       let data = {
         expense: this.expense,
         particular: this.particular,
         amount: this.amount,
         or: this.or,
         dater: this.dater,
         emp_id: this.method.id,
         cust_id: this.method.customerId
       }
       let res:any
       var that = this
       $("body #cover-spin").fadeIn(200)
        this.method.postData(data,"add-payment.php").subscribe(Response =>{
          res = Response.json()
        },err =>{
          alert("Network Error!")
        },() =>{
          $("body #cover-spin").fadeOut(200)
          if(res.message == "success"){
            
            alert("Successfully recoded")
           let sum = parseInt(that.amount);
           that.method.payments.forEach(element => {
             sum += parseInt(element.amount)
           });
           that.method.customerData.balance = parseInt(that.method.customerData.price.price) - parseInt(sum+"")
           window.localStorage.setItem("customer",JSON.stringify(that.method.customerData))
           that.method.customerData = JSON.parse(window.localStorage.getItem("customer"))
           that.method.payments.push({
             amount: that.amount,
             date_paid: that.dater,
             or: that.or
           })
           delete(this.expense)
           delete(this.particular)
           delete(this.amount)
           delete(this.or)
           delete(this.dater)
   

          }
        })
      }else{
        alert("Please complete the fields")
      }
  }

}
