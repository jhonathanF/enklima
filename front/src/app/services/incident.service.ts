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

  register(data) {
    return this.http.post(environment.API_URL + '/incident', data);
  }

  getIncidents() {
    return this.http.get(environment.API_URL + '/incident');
  }

  getValidIncidents() {
    return this.http.get(environment.API_URL + '/incident/valid');
  }

  getInvalidIncidents() {
    return this.http.get(environment.API_URL + '/incident/invalid');
  }

  invalidate(id) {
    return this.http.put(environment.API_URL + '/incident/updateValidation?id=' + id, { valid: false });
  }

  validate(id) {
    return this.http.put(environment.API_URL + '/incident/updateValidation?id=' + id, { valid: true });
  }

  delete(id) {
    return this.http.delete(environment.API_URL + '/incident?id=' + id);
  }
}
