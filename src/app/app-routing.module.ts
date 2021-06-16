import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcustomerComponent } from './cmps/addcustomer/addcustomer.component';
import { AdminComponent } from './cmps/admin/admin.component';
import { ContctlstComponent } from './cmps/contctlst/contctlst.component';
import { CustomersComponent } from './cmps/customers/customers.component';
import { LoginComponent } from './cmps/login/login.component';
import { PagenotfoundComponent } from './cmps/pagenotfound/pagenotfound.component';
import { SignupComponent } from './cmps/signup/signup.component';
import { SingleeditComponent } from './cmps/singleedit/singleedit.component';
import { SingleinfoComponent } from './cmps/singleinfo/singleinfo.component';

const appRouter: Routes = [
  {path:"", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"admin", component:AdminComponent, children: [
    {path:"", component:CustomersComponent},
    {path:"addcustomer", component:AddcustomerComponent},
    {path:"singleinfo/:id", component:SingleinfoComponent},
    {path:"singleedit/:id", component:SingleeditComponent},
    {path:"contacts", component:ContctlstComponent},
  ]},
  {path:"**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
