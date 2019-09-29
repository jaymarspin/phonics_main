import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {GlobalService} from '../../services/global.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  constructor(private router:Router,public method: GlobalService) { }

  ngOnInit() {

  }
  signout(){
    window.localStorage.removeItem("fname")
    this.router.navigate(["/login"])
    this.method.menu = false
  }

}
