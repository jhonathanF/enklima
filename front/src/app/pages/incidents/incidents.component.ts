import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'src/app/services/incident.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'description', 'copName', 'hasVictims', 'date', 'options'];
  dataSourceValid;
  dataSourceInvalid;
  constructor(
    private incidentService: IncidentService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.updateDatasources();
  }

  isAdmin(): boolean {
    return this.userService.user.isAdmin
  }

  updateDatasources() {
    this.incidentService.getValidIncidents().subscribe(incidents => {
      this.dataSourceValid = incidents;
    })

    if (this.isAdmin())
      this.incidentService.getInvalidIncidents().subscribe(incidents => {
        this.dataSourceInvalid = incidents;
      })
  }

  validate(incidentId) {
    this.incidentService.validate(incidentId).subscribe(() => {
      this.updateDatasources();
    })
  }

  inValidate(incidentId) {
    this.incidentService.invalidate(incidentId).subscribe(() => {
      console.log('invalidado')
      this.updateDatasources();
    })
  }

  delete(incidentId) {
    this.incidentService.delete(incidentId).subscribe(() => {
      this.updateDatasources();
    })
  }


}
