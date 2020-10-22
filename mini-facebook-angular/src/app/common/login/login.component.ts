import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  loginForm = this.fb.group({
      email: [""],
      password: [""]
  })

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.loginForm)
  }



}
