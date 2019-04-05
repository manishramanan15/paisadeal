import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Token} from './token';
import {InfoProfile} from './info-profile';
import {ApiEndpoint} from './api-endpoint';

@Injectable()
export class AccountService {

  private headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': 'application/json'
  });

  private jsonHeaders = new Headers({
  'Content-Type': 'application/json',
  'Accept': 'application/json'
  });

  // private apiUrl = 'http://paisadealapi.azurewebsites.net/';  // URL to web api
   // private apiUrl = 'http://localhost:53496/';  // URL to web api

  constructor(private http: Http) { }

  login(username: string, password: string): Promise<Token> {
      let input = 'grant_type=password&username=' + username + '&password=' + password;
      input += '&clientId=ngAuthApp';
      return this.http.post(ApiEndpoint.API_ENDPOINT + 'token', input, {headers : this.headers})
      .toPromise()
      .then(response =>  response.json() as Token)
      .catch(this.handleError);
  }

  createUser(username: string, password: string, email: string) {
    const input = {
      'UserName' : username,
      'Password' : password,
      'ConfirmPassword': password,
      'Email': email
    };

    return this.http.post(ApiEndpoint.API_ENDPOINT + 'api/Account/Register', JSON.stringify(input), { headers: this.jsonHeaders})
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }

  createExternalUser(info: InfoProfile) {
    return this.http.post(ApiEndpoint.API_ENDPOINT + 'api/Account/RegisterExternal', JSON.stringify(info), { headers: this.jsonHeaders})
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
