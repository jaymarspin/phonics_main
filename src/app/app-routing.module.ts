import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { MemberpanelComponent } from './components/memberpanel/memberpanel.component'
import {AuthGuard} from './auth.guard'
import { PaymentsComponent } from './components/payments/payments.component'
import { NsaleComponent } from './components/nsale/nsale.component'
const routes: Routes = [
  { path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{path: 'login', component: MainComponent},
{path: 'member', component: MemberpanelComponent, canActivate: [AuthGuard]},
{path: 'payments/:id', component: PaymentsComponent, canActivate: [AuthGuard]},
{path: 'nsale', component: NsaleComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
