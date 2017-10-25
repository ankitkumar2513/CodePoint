import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {CredentialsService} from "./credentials.service";

@Injectable()
export class AuthenticateService {

  constructor(private http:Http, private cred: CredentialsService) { }

  login(username: string, password: string) {
    let base64Credentials = btoa(username + ':' + password);
    const headers = new Headers({'Authorization': 'Basic ' + base64Credentials});
    this.http.get('http://localhost:8080/user', {
      headers : headers
    }).subscribe(
      (response) => {
        this.cred.setCredentials(base64Credentials);
        console.log('Successfully logged in');
        return "Successfully logged in as " + username;
      },
      (error) => {
        //console.error(error);
        return "Invalid credentials";
      }
    );
  }

  getHeaders() {
    return this.cred.getHeaders();
  }

  logout() {
    this.cred.clearCredentials();
  }

  isLoggedIn() {
    return this.cred.isLoggedIn();
  }

}
