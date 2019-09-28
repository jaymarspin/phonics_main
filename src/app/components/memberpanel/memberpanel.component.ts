import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service'
import * as $ from 'jquery'
@Component({
  selector: 'app-memberpanel',
  templateUrl: './memberpanel.component.html',
  styleUrls: ['./memberpanel.component.css']
})
export class MemberpanelComponent implements OnInit {
  search:any
  dater:any
  
  constructor(public method: GlobalService) {
    this.search = ""
   }

  ngOnInit() {

    this.method.signout()
    // window.localStorage.removeItem("fname")
   this.method.positions = window.localStorage.getItem("position").split(",");
    
   this.method.id = window.localStorage.getItem("id")
   var that = this
   if(!that.method.collectibles){
    this.method.positions.forEach(element => {
      if(element == "Account Officer"){
        let data = {
          id: that.method.id
        }
        let res:any
       this.method.postData(data,"get-collectibles.php").subscribe(Response =>{
         res = Response.json()
         console.log(res)
         
       },err =>{
 
       },() =>{
        
         that.method.collectibles = res.customer
         
         that.dater = res.now
         console.log(that.dater)
       })
      }
    });
    console.log("awdawd")
   }else{
    console.log("pass")
   }
   
    
  }

  dateChange(){
    console.log(this.dater)
  }

}
