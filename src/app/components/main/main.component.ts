import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {GlobalService} from '../../services/global.service'
import {AuthServiceService} from '../../services/auth-service.service'
import * as $ from 'jquery'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  username:any
  password:any
  constructor(private auth:AuthServiceService,private router:Router,public method: GlobalService) { }

  ngOnInit() {
    var fname = window.localStorage.getItem("fname")
    if(fname == "" || fname == null || fname == undefined){
      this.auth.logged = false
      
      this.router.navigate(["/login"]).then(() =>{
       
         
      })
    }else{
      this.router.navigate(["/member"]).then(() =>{
       
         
      })
    }
  }
  logged(){
    let data = {
      username: this.username,
      password: this.password
    }
    if(this.username != "" && this.username != null && this.password != null && this.password != ""){
      let res:any
      var that = this
      this.method.postData(data,"sign-in.php").subscribe(Response =>{
       
        res = Response.json()
         console.log(res)
      },err=>{

      },() =>{
         
        if(res.message == "success"){

          delete(this.method.id)
    delete(this.method.customerData)
    delete(this.method.collectibles)
    delete(this.method.agentsCollection)
    delete(this.method.agents)
    delete(this.method.customerId)
    delete(this.method.agentsCollection)
          that.auth.logged = true
            window.localStorage.setItem("position",res.position)
            window.localStorage.setItem("fname",res.data.fname)
            window.localStorage.setItem("lname",res.data.lname)
            window.localStorage.setItem("id",res.data.id)
            that.method.id = res.data.id
          this.method.refresh = true
          that.router.navigate(["/member"]) 
        }else{
          alert(res.message)
        }
      })
    }else{
      alert("Please dont leave a field empty")
    }
    
    
  }

}
