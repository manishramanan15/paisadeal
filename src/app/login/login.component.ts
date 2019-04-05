import { Component, OnInit, Host, Input, Output, NgZone } from '@angular/core';
import { AppComponent } from '../app.component';
import { EventEmitter } from 'events';
import { Token } from '../token';
import { AccountService } from '../account.service';
import { InfoProfile } from '../info-profile';
import { ApiEndpoint } from '../api-endpoint';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginToken: Token;
  public profile: InfoProfile;
  fShowInfo = false;

  @Input()
  isLoggedIn = false;
  username: string;
  password: string;
  userpassword: string;
  useremail: string;
  message = '';

  @Output() isLoggedInVariableChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(@Host() private parent: AppComponent,
  private accountService: AccountService) {
    if (window.addEventListener) {
     window.addEventListener('message', this.receiveMessage.bind(this), false);
     } else {
      (<any>window).attachEvent('onmessage', this.receiveMessage.bind(this));
     }
  }

  ngOnInit() {
  }

  receiveMessage(event: any) {
    if (event.data && event.data.external_access_token) {
        const token = new Token();
        token.access_token = event.data.external_access_token;
        token.external_user_name = event.data.external_user_name;
        this.loginToken = token ;
        this.isLoggedIn = true;
        this.isLoggedInVariableChange.emit(this.isLoggedIn);
        this.parent.isLoggedIn = this.isLoggedIn;
        this.parent.UserToken = token;
    }
  }


  public onLoginClick() {
    this.accountService.login(this.username, this.password).then(token => {
        this.message = '';
        this.loginToken = token;
        this.isLoggedIn = true;
        this.isLoggedInVariableChange.emit(this.isLoggedIn);
        this.parent.isLoggedIn = this.isLoggedIn;
    }).catch(error => {
      const err = error.json();
      this.message = err.error_description;
    });
  }

  public createUser() {
    if ((this.useremail && this.useremail === '') || (this.userpassword && this.userpassword === '')) {
      this.message = 'Please fill in all fields';
      return;
    }

    this.accountService.createUser(this.useremail, this.userpassword, this.useremail).then(data => {
      this.message = 'User Created Successfully';
    }).catch(error => {
      const err = error.json();
      this.message = err.error_description;
    });
  }

  registerExternal() {
   this.accountService.createExternalUser(this.profile)
    .then(data => {
        this.message = 'User Created Successfully';
    }).catch(error => {
      const err = error.json();
      this.message = err.error_description;
    });
  }

  onGoogleClick(provider) {
     const redirectUri = location.protocol + '//' + location.host + '/authcomplete.html';
     const externalProviderUrl = ApiEndpoint.API_ENDPOINT + 'api/Account/ExternalLogin?provider=' + provider
                                                                    + '&response_type=token&client_id=ngAuthApp'
                                                                    + '&redirect_uri=' + redirectUri;
     const oauthWindow = window.open(externalProviderUrl, 'Authenticate Account', 'location=0,status=0,width=600,height=750');
  }

}
