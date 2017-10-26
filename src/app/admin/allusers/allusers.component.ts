import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {CredentialsService} from "../../_services/credentials.service";

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  get allUsers(): MinimalUser[] {
    return this._allUsers;
  }

  private _allUsers: MinimalUser[] = null;

  constructor(private http: Http, private cred: CredentialsService) { }

  ngOnInit() {
  }

  loadAllUsers() {
    this.http.get('http://localhost:8080/admin/users', this.cred.getHeaders()).subscribe(
      (response: Response) => this._allUsers = response.json(),
      (error) => console.log(error)
    );
  }

}
