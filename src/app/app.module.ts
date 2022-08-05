import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { HeaderComponent } from './header/header.component';
import { LoginUsersComponent } from './login-users/login-users.component';
import { LinkusersComponent } from './linkusers/linkusers.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    EdittaskComponent,
    AddtaskComponent,
    HeaderComponent,
    LoginUsersComponent,
    LinkusersComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
