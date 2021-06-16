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
import { LoginComponent } from './cmps/login/login.component';
import { AdminComponent } from './cmps/admin/admin.component';
import { HeaderComponent } from './cmps/header/header.component';
import { SidenavComponent } from './cmps/sidenav/sidenav.component';
import { CustomersComponent } from './cmps/customers/customers.component';
import { AddcustomerComponent } from './cmps/addcustomer/addcustomer.component';
import { SingleinfoComponent } from './cmps/singleinfo/singleinfo.component';
import { SingleeditComponent } from './cmps/singleedit/singleedit.component';
import { SignupComponent } from './cmps/signup/signup.component';
import { ContctlstComponent } from './cmps/contctlst/contctlst.component';
import { PagenotfoundComponent } from './cmps/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HeaderComponent,
    SidenavComponent,
    CustomersComponent,
    AddcustomerComponent,
    SingleinfoComponent,
    SingleeditComponent,
    SignupComponent,
    ContctlstComponent,
    PagenotfoundComponent
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
