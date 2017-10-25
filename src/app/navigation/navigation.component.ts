import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "../_services/authenticate.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [AuthenticateService]
})
export class NavigationComponent implements OnInit {

  constructor(public auth: AuthenticateService) { }

  ngOnInit() {
  }

}
