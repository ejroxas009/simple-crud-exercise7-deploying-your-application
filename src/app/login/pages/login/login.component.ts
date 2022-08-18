import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm : FormGroup
  constructor(private fb : FormBuilder, private loginService : LoginService, private router : Router) { 

    this.logInForm = this.fb.group({
      email : [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  login(){
    const login = this.logInForm.value
    let response : any
   try{
      this.loginService.login(login.email, login.password).subscribe(res => {
      response = res
      localStorage.setItem("token", response.accessToken)
      console.log( response)
      if(response){
        this.router.navigate(['blog'])
      }else{
        alert("Account does not exist")
      }
    })
   }catch{}
    
  }

}
