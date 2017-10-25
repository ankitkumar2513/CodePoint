import {Component, OnInit} from "@angular/core";
import {default_code} from "./defaults/default_code";

declare var ace: any;

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css'],
})
export class CodeEditorComponent implements OnInit {

  lang: string = 'C';
  editor: any;

  ngOnInit(): void {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/chrome');
    this.editor.session.setMode('ace/mode/'+this.langMap[this.lang]);
    this.editor.session.setOptions({ tabSize: 2, useSoftTabs: true });
    this.editor.setValue(default_code.get(this.defaultMap[this.lang]));
    this.editor.clearSelection();
    this.editor.setFontSize(14);
    this.editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true
    });
  }

  constructor() { }

  langMap = {'C': 'c_cpp', 'C++': 'c_cpp', 'Java': 'java', 'Python': 'python'};
  defaultMap = {'C': 'c', 'C++': 'cpp', 'Java': 'java', 'Python': 'python'};
  langList = ['C', 'C++', 'Java', 'Python'];

  langChange(language) {
    this.lang = language.value;
    this.editor.session.setMode({path: 'ace/mode/'+this.langMap[this.lang], v: Date.now()});
    this.editor.setValue(default_code.get(this.defaultMap[this.lang]));
    this.editor.clearSelection();
    this.editor.focus();
    this.editor.navigateFileEnd();
    /*let n = this.editor.getSession().getValue().split("\n").length;
     this.editor.gotoLine(n);*/
    //alert(this.langMap[this.lang]);
  }
}
