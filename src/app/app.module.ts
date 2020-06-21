import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//  Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {FormsModule} from '@angular/forms'
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';
import { environment } from '../environments/environment';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './shared/employee.service';

const firebaseConfirg  =
              {
                apiKey: "AIzaSyDk0qEH1jUtEuu5qFOJTla7zXQuTrzT1pk",
                authDomain: "fir-6b0e7.firebaseapp.com",
                databaseURL: "https://fir-6b0e7.firebaseio.com",
                projectId: "fir-6b0e7",
                storageBucket: "fir-6b0e7.appspot.com",
                messagingSenderId: "629787033352",
                appId: "1:629787033352:web:e39ddf33d6efa579a7f6bd"
              };

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    EmployeeComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfirg),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    FormsModule,
    // BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
