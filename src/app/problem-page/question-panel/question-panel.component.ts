import {Component, OnInit} from "@angular/core";
import {MockProblem} from "../../mock_problem";

@Component({
  selector: 'app-question-panel',
  templateUrl: './question-panel.component.html',
  styleUrls: ['./question-panel.component.css']
})
export class QuestionPanelComponent implements OnInit {

  problem: Problem;

  ngOnInit() {

  }

  constructor() {
    this.problem = MockProblem.getMockProblem();
  }

  parseMultiline(unparsedString: string): string[] {
    return unparsedString.split('\n');
  }

}
