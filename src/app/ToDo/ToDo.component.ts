import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ToDo',
  templateUrl: './ToDo.component.html',
  styleUrls: ['./ToDo.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  public newItem = "";
  public lists = [];
  public new = {};
  ngOnInit() {

  }
  onChangeHandler = (event) => {
    this.newItem = event.target.value;
  }

  onClickHandler = (event) => {

    this.new = {
      id: 1 + Math.random(),
      value: this.newItem.slice()
    }

    this.lists.push(this.new);

    this.newItem = "";

  }

  deleteItemHandler = (event, id) => {

    const temp = [...this.lists];

    this.lists = temp.filter((list) => { return list.id !== id });

  }
}
