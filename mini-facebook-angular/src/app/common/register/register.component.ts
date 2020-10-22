import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  dates = Array.from({ length: 31 }, (_, i) => i + 1)
  years = Array.from({ length: 31 }, (_, i) => i + 1)
  genders = ["Male", "Female", "Other"]
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<RegisterComponent>) { }

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
    this.closeDialog()
  }
  closeDialog() {
    this.dialogRef.close()
    
  }

}
