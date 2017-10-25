import { Injectable } from '@angular/core';
import {Headers} from "@angular/http";

@Injectable()
export class CredentialsService {

  private headers: Headers;

  constructor() { }

  setCredentials(credentials: string) {
    localStorage.setItem("credentials", credentials);
  }

  getHeaders() {
    if(this.headers == null) {
      this.headers = new Headers({'Authorization': 'Basic ' + localStorage.getItem('credentials')});
    }
    return {headers:this.headers};
  }

  getHeadersFromCreds(credentials: string) {
    return new Headers({'Authorization': 'Basic ' + localStorage.getItem('credentials')});
  }

  clearCredentials() {
    localStorage.removeItem('credentials');
    this.headers = null;
  }

  isLoggedIn() {
    return (localStorage.getItem('credentials') != null && localStorage.getItem('credentials') != '');
  }
}
