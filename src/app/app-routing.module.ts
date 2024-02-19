import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './components/addcustomer/addcustomer.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactListComponent } from './components/contactlist/contactlist.component';
import { CustomersComponent } from './components/customers/customers.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SignUpComponent } from './components/signup/signup.component';
import { SingleeditComponent } from './components/singleedit/singleedit.component';
import { SingleinfoComponent } from './components/singleinfo/singleinfo.component';

const appRouter: Routes = [
    { path: "", component: LoginComponent },
    { path: "signup", component: SignUpComponent },
    { path:"admin", component: AdminComponent, children: [
        { path: "", component: CustomersComponent},
        { path: "addcustomer", component: AddCustomerComponent},
        { path: "singleinfo/:id", component: SingleinfoComponent},
        { path: "singleedit/:id", component: SingleeditComponent},
        { path: "contacts", component: ContactListComponent},
    ]},
    { path:"**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRouter) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
