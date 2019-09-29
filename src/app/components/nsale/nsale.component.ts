import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service'
@Component({
  selector: 'app-nsale',
  templateUrl: './nsale.component.html',
  styleUrls: ['./nsale.component.css']
})
export class NsaleComponent implements OnInit {

  constructor(public method: GlobalService) { }

  ngOnInit() {
    this.method.menu = true
  }

}
