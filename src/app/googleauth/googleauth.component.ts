import { Component, OnInit } from '@angular/core';
import { ApiEndpoint } from '../api-endpoint';

@Component({
  selector: 'app-googleauth',
  templateUrl: './googleauth.component.html',
  styleUrls: ['./googleauth.component.css']
})
export class GoogleauthComponent implements OnInit {
  indexof: number;
  constructor() { }

  ngOnInit() {
    let data;
    this.indexof = window.location.hash.indexOf('#');
    if (window.location.hash.indexOf('#') === 0) {
      data = this.parseQueryString(window.location.hash.substr(1));
      window.opener.postMessage(data, ApiEndpoint.AUTH_RECIEPENT);
      window.close();
    } else {
      return {};
    }
  }

   parseQueryString(queryString) {
    let pairs, pair, separatorIndex, escapedKey, escapedValue, key, value;
    const data = {};
    if (queryString === null) {
        return data;
      }
    pairs = queryString.split('&');
    for (let i = 0; i < pairs.length; i++) {
        pair = pairs[i];
        separatorIndex = pair.indexOf('=');
        if (separatorIndex === -1) {
            escapedKey = pair;
            escapedValue = null;
        } else {
            escapedKey = pair.substr(0, separatorIndex);
            escapedValue = pair.substr(separatorIndex + 1);
        }
        key = decodeURIComponent(escapedKey);
        value = decodeURIComponent(escapedValue);
        data[key] = value;
      }
    return data;
  }

}
