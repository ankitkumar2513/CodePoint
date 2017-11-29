import {Component, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import {AuthenticateService} from "../_services/authenticate.service";

@Component({
  selector: 'app-problems-list',
  templateUrl: './problems-list.component.html',
  styleUrls: ['./problems-list.component.css'],
  providers: [AuthenticateService]
})
export class ProblemsListComponent implements OnInit {

  constructor(private http: Http, private auth: AuthenticateService) { }

  problems: Problem[];

  ngOnInit() {
    this.http.get("http://localhost:8080/getallproblems").subscribe(
      (response: Response) => {
        console.log(response.json());
        this.problems = response.json();
      },
      (error) => console.error(error)
    );
  }

}
