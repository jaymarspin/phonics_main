import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service'
import { Router} from '@angular/router';
import * as $ from 'jquery'
@Component({
  selector: 'app-memberpanel',
  templateUrl: './memberpanel.component.html',
  styleUrls: ['./memberpanel.component.css']
})
export class MemberpanelComponent implements OnInit {
  search:any
 
  
  constructor(public method: GlobalService,private router:Router) {
    this.search = ""
   }

  ngOnInit() {
    this.method.menu = true
    
    this.method.signout()
    // window.localStorage.removeItem("fname")
   if(!this.method.id){
    this.method.id = window.localStorage.getItem("id")
   }
   var that = this

    
   if(!that.method.collectibles || that.method.refresh == true){
    this.method.positions.forEach(element => {
      if(element == "Account Officer"){
        let data = {
          id: that.method.id
        }
        let res:any
        $("body #cover-spin").fadeIn(200)
       this.method.postData(data,"get-collectibles.php").subscribe(Response =>{
        
         res = Response.json()
         console.log(res)
         
       },err =>{
        alert("Network Error! "+err)
       },() =>{
        $("body #cover-spin").fadeOut(200)
        that.method.refresh = false
         that.method.collectibles = res.customer
         
         that.method.dater = res.now
        
       })
      }
    });
    
   }else{
   
   }
   
    
  }
  paymantNav(id,data){
    
    this.router.navigate(["/payments",id]).then(() =>{
      this.method.customerData = data

      window.localStorage.setItem("customer",JSON.stringify(data))
         
    })
  }

  dateChange(){
     
  }

}
