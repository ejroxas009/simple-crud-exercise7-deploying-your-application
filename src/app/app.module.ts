import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogService } from './blog/services/blog.service';
import { BookService } from './book/services/book.service';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/pages/login/login.component';
import { SignupComponent } from './signup/pages/signup/signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  

   
    
  ],
  providers: [BookService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
