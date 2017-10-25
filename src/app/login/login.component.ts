import {Component, OnInit} from "@angular/core";
import {AuthenticateService} from "../_services/authenticate.service";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticateService]
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(public auth: AuthenticateService, private http: Http) { }

  ngOnInit() {

  }

  login() {
    if(this.username.trim() == '' || this.password.trim() == '')
      return;
    this.auth.login(this.username, this.password);
  }

  getSecuredResource() {
    this.http.get('http://localhost:8080/admin/users', this.auth.getHeaders()).subscribe(
      (response: Response) => console.log(response.json()),
      (error) => console.error(error)
    );
  }

  clear() {
    this.username = '';
    this.password = '';
  }

  isCleared() {
    return (this.username == '' && this.password == '');
  }
}
