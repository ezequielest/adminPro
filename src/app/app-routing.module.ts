import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SharedComponent } from "./components/shareds/shared/shared.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { 
        path: 'dashboard', 
        component: DashboardComponent,
        children: [
            { path: '', component: SharedComponent },
            { path: '**', component: SharedComponent }
        ]
    },
    { path: '**', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
