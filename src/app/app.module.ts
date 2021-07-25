import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // routing

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment'; // db login details


// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/sidenav/sidenav.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AddCustomerComponent } from './components/addcustomer/addcustomer.component';
import { SingleinfoComponent } from './components/singleinfo/singleinfo.component';
import { SingleeditComponent } from './components/singleedit/singleedit.component';
import { SignUpComponent } from './components/signup/signup.component';
import { ContactListComponent } from './components/contactlist/contactlist.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HeaderComponent,
    SideNavComponent,
    CustomersComponent,
    AddCustomerComponent,
    SingleinfoComponent,
    SingleeditComponent,
    SignUpComponent,
    ContactListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, "my-app"),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
