import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import { MemberpanelComponent } from './components/memberpanel/memberpanel.component';
import { MenuComponent } from './includes/menu/menu.component'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MemberpanelComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
