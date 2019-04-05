import { Component, OnInit, Input } from '@angular/core';
import { Token } from '../token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() LoggedIn = false;
  @Input() UserToken: Token;
  constructor() {
    this.LoggedIn = false;
   }

  ngOnInit() {
  }

}
