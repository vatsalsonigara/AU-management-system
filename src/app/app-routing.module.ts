import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CombineComponent } from './combine/combine.component';
import { HomeComponent } from './home/home.component';
import { TrendsComponent } from './trends/trends.component';


const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'home',component : HomeComponent},
    {path:'opportunity',component:CombineComponent},
    {path:'trends',component:TrendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
