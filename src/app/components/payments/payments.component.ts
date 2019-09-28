import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service'
import { ActivatedRoute } from "@angular/router";
import * as $ from 'jquery'
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  id:any
  payments:any
  constructor(public method: GlobalService,private route: ActivatedRoute) { }

  ngOnInit() {
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
