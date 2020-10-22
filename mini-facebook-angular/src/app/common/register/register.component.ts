import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  dates = Array.from({ length: 31 }, (_, i) => i + 1)
  years = Array.from({ length: 31 }, (_, i) => i + 1)
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  registerForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    password: [''],
    birthday: this.fb.group({
      month: [''],
      date: [''],
      year: ['']
    }),
    gender: ['']
  })

  onSubmit() {
    console.log(this.registerForm)
  }
  changeBirthMonth(event) {
    // this.month.setValue(event.target.value, { onlySelf: true })
    // console.log(event)
    // this.registerForm.patchValue({month:"Mar"})
    // console.log(this.registerForm.value)
  }
}
