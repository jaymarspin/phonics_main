import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {GlobalService} from '../../services/global.service'
import * as $ from 'jquery'
@Component({
  selector: 'app-nsale',
  templateUrl: './nsale.component.html',
  styleUrls: ['./nsale.component.css']
})
export class NsaleComponent implements OnInit {
  emp_id:any
  fname:any
  lname:any
  address:any
  province:any
  product:any
  pc:any
  contact:any
  agent:any
  occupation:any 

  productCollection:any
  productId:any
  provinceCollection:any
  provinceId:any
  cityCollection:any
  cityId:any
  brgyCollection:any
  brgyId:any
  termVal:any
  terms:any
  schedule:any
  delivery:any
  downpayment:any
  or:any

  success:any = false
  error:any = false
 pass = false
  constructor(public method: GlobalService,public changeDetection: ChangeDetectorRef) {
    this.provinceCollection = new Array()
    this.cityCollection = new Array()
    this.terms = new Array("Cash On Delivery","Spot Cash","Good as Cash","Installment")
   }

  ngOnInit() {
    this.method.signout()
    

    this.method.positions.forEach(element => {
      console.log(element)
      if(element == "Field Supervisor"){
        this.pass = true
      }
    });
    
    
    this.method.menu = true
    var that= this
    let ress:any
    this.emp_id = window.localStorage.getItem("id")
    $("body #cover-spin").fadeIn(200)
    this.method.postData(null,"province.php").subscribe(Response =>{
      ress = Response.json()
     
    },err =>{

    },() =>{
      let res:any
      that.method.postData(null,"products.php").subscribe(Response2 => {
        res = Response2.json()
      },err =>{
        alert("Network Error! "+err)
      },() =>{
          that.productCollection = res
      })
      $("body #cover-spin").fadeOut(200)
      that.changeDetection.detectChanges();
      that.provinceCollection = ress
       
    })
  }

  provinceChange(id){
    $("body #cover-spin").fadeIn(200)
    delete(this.cityId)
    delete(this.brgyId)
    this.city(id)
    
  }
  city(id){
    var that = this
    let data = {
      id: id
    }
    that.method.postData(data,"city_mun.php").subscribe(Response => {
      
    
      that.cityCollection = Response.json()
    },err =>{

    },() =>{
      
       if(that.cityCollection.length > 0 && that.cityId == undefined){
        that.cityId = that.cityCollection[0].id
       } 
        
     
      that.brgy(that.cityId)
      that.changeDetection.detectChanges();
    })
  }
  cityChanged(id){
    $("body #cover-spin").fadeIn(200)
    delete(this.brgyId)
    this.brgy(id)
  }
  brgy(id){

    var that = this
    let data = {
      id: id
    }
    that.method.postData(data,"brgy.php").subscribe(Response => {
      
     
      that.brgyCollection = Response.json()
     
    },err =>{

    },() =>{
      $("body #cover-spin").fadeOut(200)
        if(that.brgyCollection.length > 0 && that.brgyId == undefined){
          that.brgyId = that.brgyCollection[0].id
        } 
        
      
      
      that.changeDetection.detectChanges();
    })
  }

  submit(){
    var that = this
    if(this.cityId != undefined && this.cityId != null && this.cityId != 0 && this.brgyId != undefined && this.brgyId != null && this.brgyId != 0){
      let data = {
        emp_id: this.emp_id,
        fname: this.fname,
        lname: this.lname,
        address: this.address,
        brgy: this.brgyId,
        provinceId: this.provinceId,
        cityId: this.cityId,
        contact: this.contact,
        product: this.productId,
        pc: this.pc,
        occupation: this.occupation,
        term: this.termVal,
        schedule: this.schedule,
        delivery: this.delivery,
        downpayment: this.downpayment,
        or: this.or,
        agents: this.method.agentsCollection
      }
    
      
      let res:any
      if(this.pass == true){
        this.method.postData(data,"add_customer.php").subscribe(Response =>{
          console.log(Response)
          res = Response.json()
        }, err =>{
          alert("Network Error! "+err)
        },() =>{
          if(res.message == "success"){
            that.success = true
            that.error = false
            alert("Successs")
      
   
           delete(that.fname)
           delete(that.lname)
           delete(that.address)
           delete(that.brgyId)
           delete(that.provinceId)
           delete(that.cityId)
           delete(that.contact)
           delete(that.productId)
           delete(that.pc)
           delete(that.occupation)
           delete(that.termVal)
           delete(that.schedule)
           delete(that.delivery)
           delete(that.downpayment)
           delete(that.or)
           delete(this.method.agents)
           delete(this.method.agentsCollection)
          }else{
            that.success = false
            that.error = true
            alert(res.message)
          }
        })
      }else{
        alert("You are not a field supervisor")
      }
      
    }else{
      alert("dont leave a field empty")
    }
  }

  agentFurther(){
    if(!this.method.agents || this.method.agents.length == 0){
      $("body #cover-spin").fadeIn(200)
    this.method.event = "agents";
    this.method.title = "Select Agents"
    let res:any

    this.method.postData(null,"agents.php").subscribe(Response =>{
      res = Response.json()
    }, err =>{
      alert("Network Error"+err)
    },() =>{
      $("body #cover-spin").fadeOut(200)
      this.method.agents = res
       
    })
    }
    
  }


}
