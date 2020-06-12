import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { CombineComponent } from './Components/combine/combine.component';
import { TrendsComponent } from './Components/trends/trends.component';



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
