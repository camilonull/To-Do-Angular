import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuard } from './service/authguard.service';


const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'mainPage',component:MainPageComponent, canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
