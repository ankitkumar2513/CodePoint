import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "../_services/authenticate.service";

@Component({
  selector: 'app-problem-page',
  templateUrl: './problem-page.component.html',
  styleUrls: ['./problem-page.component.css'],
  providers: [AuthenticateService]
})
export class ProblemPageComponent implements OnInit {

  constructor(public auth: AuthenticateService) { }

  ngOnInit() {
  }

}
