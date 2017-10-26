import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  firstname: string = '';
  lastname: string = '';
  password: string = '';
  repassword: string = '';

  constructor(private http: Http) { }

  ngOnInit() {
  }

  invalid() {
    return (this.username.trim() == '' || this.firstname.trim() == '' || this.lastname.trim() == '' ||
    this.password.trim() == '' || this.repassword.trim() == '' || (this.password !== this.repassword));
  }

  register() {
    this.http.post('http://localhost:8080/register', {
      username: this.username.trim(),
      password: this.password.trim(),
      name: this.firstname.trim() + ' ' + this.lastname.trim()
    }).subscribe(
      (response: Response) => {
        return console.log(response.json());
      },
      (error) => console.log(error)
    );
  }

}
