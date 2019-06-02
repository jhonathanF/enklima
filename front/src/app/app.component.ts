import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trabalhoBim';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {

  }

  isLogged() {
    return this.userService.user ? true : false;
  }
}
