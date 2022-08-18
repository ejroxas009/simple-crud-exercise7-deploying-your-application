import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http : HttpClient) { }

  signup(firstname:string,lastname : string,email:string, password :string){
    return this.http.post("https://json-server-seven-mock.herokuapp.com/register", {firstname, lastname, email, password})
  }
}
