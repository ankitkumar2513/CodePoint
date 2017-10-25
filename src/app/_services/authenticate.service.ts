import { Injectable } from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import {CredentialsService} from "./credentials.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticateService {

  constructor(private http:Http, private cred: CredentialsService, private router: Router) { }

  login(username: string, password: string) {
    let base64Credentials = btoa(username + ':' + password);
    const headers = new Headers({'Authorization': 'Basic ' + base64Credentials});
    this.http.get('http://localhost:8080/user', {
      headers : headers
    }).subscribe(
      (response: Response) => {
        this.cred.setCredentials(base64Credentials);
        console.log('Successfully logged in');
        let name: string = response.json()['principal']['name'];
        name.toUpperCase();
        localStorage.setItem('username', name);
        this.router.navigate(['/']);
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
    localStorage.removeItem('username');
    this.cred.clearCredentials();
  }

  isLoggedIn() {
    return this.cred.isLoggedIn();
  }

  getUsername() {
    return localStorage.getItem('username');
  }

}
