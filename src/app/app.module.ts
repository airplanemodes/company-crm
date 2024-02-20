import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // routing

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/sidenav/sidenav.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AddCustomerComponent } from './components/addcustomer/addcustomer.component';
import { SingleInfoComponent } from './components/singleinfo/singleinfo.component';
import { SingleEditComponent } from './components/singleedit/singleedit.component';
import { SignUpComponent } from './components/signup/signup.component';
import { ContactListComponent } from './components/contactlist/contactlist.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getPerformance, providePerformance } from '@angular/fire/performance';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AdminComponent,
        HeaderComponent,
        SideNavComponent,
        CustomersComponent,
        AddCustomerComponent,
        SingleInfoComponent,
        SingleEditComponent,
        SignUpComponent,
        ContactListComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, "company-crm"),
        AngularFirestoreModule,
        AngularFireAuthModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase()),
        providePerformance(() => getPerformance())
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
