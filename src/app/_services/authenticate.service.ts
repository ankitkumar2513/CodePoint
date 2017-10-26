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
        localStorage.setItem('name', response.json()['principal']['name']);
        let roles: string[] = response.json()['principal']['roles'];
        let rolesString = roles.join(',');
        localStorage.setItem('roles', rolesString);
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
    localStorage.removeItem('name');
    localStorage.removeItem('roles');
    this.cred.clearCredentials();
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    return this.cred.isLoggedIn();
  }

  getName() {
    return localStorage.getItem('name');
  }

  private getRoles(): string[] {
    if(localStorage.getItem('roles') != null) {
      return localStorage.getItem('roles').split(',');
    } else {
      return Array.of(null);
    }
  }

  isRolePresent(role: string): boolean {
    return this.getRoles().indexOf(role) != -1;
  }

}
