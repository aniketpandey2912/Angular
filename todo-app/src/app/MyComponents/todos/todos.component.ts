import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  ngOnInit(): void {
    console.log('TodosComponent Loaded');
  }

  constructor() {
    this.todos = [
      { id: 1, title: 'One', desc: 'todo 1', active: true },
      { id: 2, title: 'Two', desc: 'todo 2', active: true },
      { id: 3, title: 'Three', desc: 'todo 3', active: true },
    ];
  }
}
