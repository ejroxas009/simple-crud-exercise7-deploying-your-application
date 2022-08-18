import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm : FormGroup

  constructor(private fb: FormBuilder, private signupService : SignupService) {
    this.signUpForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      password: ['']
    })
  }


  ngOnInit(): void {
  }

  submit(){
    const signup = this.signUpForm.value
    this.signupService.signup(signup.firstname, signup.lastname, signup.email, signup.password)
    .subscribe()
    
  }
}
