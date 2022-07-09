import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './login/password/password.component';
import { UsernameComponent } from './login/username/username.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsernameComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
