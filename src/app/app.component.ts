import { Component } from '@angular/core'; 
import { Router} from '@angular/router';
import {GlobalService} from './services/global.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'main';

  constructor(public method: GlobalService, private router:Router){
            if(window.localStorage.getItem("position")){
              this.method.positions = window.localStorage.getItem("position").split(",");
            }
            
    
            this.method.id = window.localStorage.getItem("id")
  }
}
