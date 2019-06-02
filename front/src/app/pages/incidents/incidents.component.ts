import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'src/app/services/incident.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'description'];
  dataSource;
  constructor(
    private incidentService: IncidentService
  ) { }

  ngOnInit() {
    this.incidentService.getIncidents().subscribe(incidents => {
      this.dataSource = incidents;
    })
  }


}
