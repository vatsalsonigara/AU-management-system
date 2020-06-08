import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateOppComponent } from './create-opp/create-opp.component';
import { OppTableComponent } from './opp-table/opp-table.component';
import { LoginComponent } from './login/login.component';
import { CombineComponent } from './combine/combine.component';
import { HomeComponent } from './home/home.component';
import { TrendsComponent } from './trends/trends.component';


const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'home',component : HomeComponent},
    {path:'opportunity',component:CombineComponent},
    {path:'trends',component:TrendsComponent}
    
  //{path:'/opportunity',component:CreateOppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
