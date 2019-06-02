import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(
    private http: HttpClient
  ) { }

  getIncidents() {
    return this.http.get(environment.API_URL + '/incident');
  }
}
