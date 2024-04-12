import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarModule } from 'angular-calendar';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule,
    provideFirebaseApp(() => initializeApp({"projectId":"to-do-3b729","appId":"1:530649735242:web:8506593b8c37cddf25c6b3","storageBucket":"to-do-3b729.appspot.com","apiKey":"AIzaSyCPU_X8m4g43YO3BRWEGWAHVfmOyo84iFk","authDomain":"to-do-3b729.firebaseapp.com","messagingSenderId":"530649735242","measurementId":"G-LP7LS2FV97"})),
    provideFirestore(() => getFirestore()),
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
