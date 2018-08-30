import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*ROUTING*/ 
import { appRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedComponent } from './pages/shareds/shared/shared.component';
import { NotfoundComponent } from './pages/shareds/notfound/notfound.component';
import { Graficos1Component } from './pages/adminpanel/graficos1/graficos1.component';

import { AdminpanelComponent } from "./pages/adminpanel/adminpanel.component";
import { HeaderComponent } from './pages/shareds/header/header.component';
import { LateralMenuComponent } from './pages/shareds/lateral-menu/lateral-menu.component';
import { NavigateComponent } from './pages/shareds/navigate/navigate.component';
import { DashboardComponent } from './pages/adminpanel/dashboard/dashboard.component';
import { GrafTortaComponent } from './components/graf-torta/graf-torta.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SharedComponent,
    NotfoundComponent,
    Graficos1Component,

    AdminpanelComponent,
    HeaderComponent,
    LateralMenuComponent,
    NavigateComponent,
    DashboardComponent,
    GrafTortaComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
