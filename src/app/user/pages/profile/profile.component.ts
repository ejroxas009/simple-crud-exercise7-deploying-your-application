import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm : FormGroup
  constructor(private fb: FormBuilder) { 

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

}
