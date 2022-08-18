import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm : FormGroup
  constructor(private fb: FormBuilder, private router : Router) { 

    this.profileForm = this.fb.group({
      email : [''],
      name: [''],
      bio: [''],
      activate: ['']

    })


  }

  ngOnInit(): void {
  }

submit(){

  console.log(this.profileForm.value)
}

logout(){
  localStorage.removeItem('token')
  console.log('logged out')
  this.router.navigate(['login'])
}
}
