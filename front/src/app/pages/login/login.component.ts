import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/user.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private userService: UserService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  login() {
    this.spinner.show();
    this.userService.login(this.form.controls.username.value, this.form.controls.password.value).subscribe((user) => {
      this.userService.saveUser(new User(user['name'], user['age'], user['rank'], user['isAdmin'], user['token']));
      this.router.navigate(['dashboard']);
      this.spinner.hide();
    }, () => {
      this.snackBar.open('Email ou senha Inválidos!', null, { duration: 3000 });
      this.spinner.hide();
    })
  }
}
