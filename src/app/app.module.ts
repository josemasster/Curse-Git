import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms'; // Importa FormsModule





//Components
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// VariableEntorno 

const firebaseConfig = {
  apiKey: "AIzaSyDrN5KwZ3uyuUynFcLaOnRvOx8LrYllz4w",
  authDomain: "crud-b623c.firebaseapp.com",
  projectId: "crud-b623c",
  storageBucket: "crud-b623c.appspot.com",
  messagingSenderId: "877809378424",
  appId: "1:877809378424:web:fd4827932bb5249dfd798d"
};

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     provideFirebaseApp(() => initializeApp(firebaseConfig)),
     provideFirestore(() => getFirestore()),
    






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
