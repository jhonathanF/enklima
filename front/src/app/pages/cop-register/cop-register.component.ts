import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cop-register',
  templateUrl: './cop-register.component.html',
  styleUrls: ['./cop-register.component.scss']
})
export class CopRegisterComponent implements OnInit {

  formCop: FormGroup
  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.formCop = new FormGroup({
      name: new FormControl('', Validators.required),
      rank: new FormControl('', Validators.required),
      age: new FormControl(18, Validators.required),
      password: new FormControl('', Validators.required),
      isAdmin: new FormControl(false, Validators.required)
    });
  }

  register() {
    this.spinner.show();
    this.userService.register(this.formCop.value).subscribe(() => {
      this.spinner.hide();
      this.formCop.reset();
      this.snackBar.open('Policial cadastrado com sucesso!', null, { duration: 3000 })

    }, () => {
      this.spinner.hide();
      this.formCop.reset();
      this.snackBar.open('Erro :(! ', null, { duration: 3000 });
    })
  }


}
