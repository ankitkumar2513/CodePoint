import {Component, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import {CredentialsService} from "../../_services/credentials.service";

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  allUsers: MinimalUser[];
  toDelete: any = {};

  constructor(private http: Http, private cred: CredentialsService) { }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteSelected() {
    console.log(this.getIdsToDelete());
    this.http.post('http://localhost:8080/admin/deletemultiple', this.getIdsToDelete(), this.cred.getHeaders()).subscribe(
      (response: Response) => {
        console.log(response.json())
        this.loadAllUsers();
      },
      (error) => console.log(error)
    );
  }

  deleteStatusChanged(newStatus: {id: string, deleteStatus: boolean}) {
    this.toDelete[newStatus.id] = newStatus.deleteStatus;
  }

  private getIdsToDelete() {
    let deleteThese: any[] = [];
    //console.log(this.toDelete);
    Object.keys(this.toDelete).forEach(key => {
      if(this.toDelete[key] == true) {
        deleteThese.push(key);
      }
    });
    return deleteThese;
  }

  private loadAllUsers() {
    this.http.get('http://localhost:8080/admin/users', this.cred.getHeaders()).subscribe(
      (response: Response) => {
        let allUsers = response.json();
        allUsers.forEach(user => {
          this.toDelete[user['id']] = false;
        });
        return this.allUsers = response.json();
      },
      (error) => console.log(error)
    );
  }

}
