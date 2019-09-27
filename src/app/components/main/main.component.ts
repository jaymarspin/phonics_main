import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {GlobalService} from '../../services/global.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  username:any
  password:any
  constructor(private router:Router,public method: GlobalService) { }

  ngOnInit() {
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
          alert("Successfully log on")
          that.router.navigate(["/member"]).then(() =>{
       
            window.localStorage.setItem("position",res.position)
            window.localStorage.setItem("fname",res.position)
            window.localStorage.setItem("lname",res.position)
          })
        }
      })
    }else{
      alert("Please dont leave a field empty")
    }
    
    
  }

}
