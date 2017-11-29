import {Component, OnDestroy, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-question-panel',
  templateUrl: './question-panel.component.html',
  styleUrls: ['./question-panel.component.css']
})
export class QuestionPanelComponent implements OnInit, OnDestroy  {

  problem: Problem;
  title: string;
  private sub:any;

  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.title = params['title'];
    });
    this.http.get('http://localhost:8080/getproblem/'+this.title).subscribe(
      (response: Response) => {
        this.problem = response.json();
      },
      (error) => console.log(error)
    );
  }

  parseMultiline(unparsedString: string): string[] {
    return unparsedString.split('\n');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
