import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AdminpanelComponent } from "./pages/adminpanel/adminpanel.component";
import { DashboardComponent } from "./pages/adminpanel/dashboard/dashboard.component";
import { Graficos1Component } from "./pages/adminpanel/graficos1/graficos1.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent,},
    { 
        path: 'admin', 
        component: AdminpanelComponent,
        children: [
            { path: '', component: DashboardComponent},
            { path: 'graf', component: Graficos1Component},
            { path: '**', redirectTo: '', pathMatch: 'full' },
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: '**', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class appRoutingModule {}
