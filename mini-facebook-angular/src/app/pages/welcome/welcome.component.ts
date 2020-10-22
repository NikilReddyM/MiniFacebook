import { Component, OnInit } from '@angular/core';
// import {  } from "module";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { RegisterComponent } from 'src/app/common/register/register.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  registerUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width="40%";
    dialogConfig.height="500px";
    this.dialog.open(RegisterComponent,dialogConfig);
    
  }

}
