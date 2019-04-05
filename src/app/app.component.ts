import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Token } from './token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoggedIn= false;
  public UserToken: Token;
}
