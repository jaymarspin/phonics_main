import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { MemberpanelComponent } from './components/memberpanel/memberpanel.component'
import {AuthGuard} from './auth.guard'
const routes: Routes = [
  { path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{path: 'login', component: MainComponent},
{path: 'member', component: MemberpanelComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
