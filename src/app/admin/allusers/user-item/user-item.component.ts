import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input()
  user: MinimalUser;
  deleteStatus: boolean;

  @Output()
  deleteStatusChanged = new EventEmitter<{id: string, deleteStatus: boolean}>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteStatusChanged() {
    this.deleteStatusChanged.emit({id: this.user.id, deleteStatus: this.deleteStatus});
  }

}
