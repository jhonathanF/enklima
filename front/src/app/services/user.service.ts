import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User;
  constructor(
    private router: Router,
    private http: HttpClient
    ) {
    this.user = JSON.parse(localStorage.getItem('currentUser')) as User;
  }

  login(username, password) {
    return this.http.post(environment.API_URL + '/login', { username: username, password: password });
  }

  createNewUser(name, email, password, type) {
    let allUsers: User[] = JSON.parse(localStorage.getItem('users')) as User[];
    if (allUsers) {
      allUsers.push(new User(name, email, password, type));
    } else {
      allUsers = [];
      allUsers.push(new User(name, email, password, type));
    }
    localStorage.setItem('users', JSON.stringify(allUsers));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem('currentUser');
  }

  saveUser(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.user = user;
  }
}
