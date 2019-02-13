import { CategoryComponent } from './pages/category/category.component';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { HomeComponent } from './pages/home/home.component';
import { AppLayoutComponent } from './share/app-layout/app-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginLayoutComponent } from './share/login-layout/login-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"apps",component:AppLayoutComponent,
  canActivate: [AuthGuard]
  ,children:[
    {path: "",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:AdministratorComponent},
    {path:"product",component:ProductComponent},
    {path:"category",component:CategoryComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
