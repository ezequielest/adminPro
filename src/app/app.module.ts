import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FeatureRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedComponent } from './components/shareds/shared/shared.component';
import { LateralMenuComponent } from './components/shareds/lateral-menu/lateral-menu.component';
import { NavigateComponent } from './components/shareds/navigate/navigate.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/shareds/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    SharedComponent,
    LateralMenuComponent,
    NavigateComponent,
    DashboardComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
