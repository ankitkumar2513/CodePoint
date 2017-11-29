import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-problem-item',
  templateUrl: './problem-item.component.html',
  styleUrls: ['./problem-item.component.css']
})
export class ProblemItemComponent implements OnInit {

  @Input()
  problem: Problem;

  constructor() { }

  ngOnInit() {
  }

}
