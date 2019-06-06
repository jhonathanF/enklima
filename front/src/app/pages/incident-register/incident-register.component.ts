import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IncidentService } from 'src/app/services/incident.service';
import { MatSnackBar } from '@angular/material';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-incident-register',
  templateUrl: './incident-register.component.html',
  styleUrls: ['./incident-register.component.scss']
})
export class IncidentRegisterComponent implements OnInit {

  formIncident: FormGroup
  constructor(
    private incidentService: IncidentService,
    private snackBar: MatSnackBar,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.formIncident = new FormGroup({
      description: new FormControl('', Validators.required),
      copName: new FormControl('', Validators.required),
      valid: new FormControl(false, Validators.required),
      hasVictims: new FormControl(false, Validators.required),
    });
  }

  register() {
    this.spinner.show();
    this.incidentService.register(this.formIncident.value).subscribe(() => {
      this.spinner.hide();
      this.formIncident.reset();
      this.snackBar.open('Ocorrencia cadastrada com sucesso!', null, { duration: 3000 })

    }, () => {
      this.spinner.hide();
      this.formIncident.reset();
      this.snackBar.open('Erro :(! ', null, { duration: 3000 });
    })
  }

}
