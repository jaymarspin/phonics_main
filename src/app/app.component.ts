import { Component } from '@angular/core';
import {AuthServiceService} from './services/auth-service.service'
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'main';

  constructor(public auth:AuthServiceService,private router:Router){
    
  }
}
