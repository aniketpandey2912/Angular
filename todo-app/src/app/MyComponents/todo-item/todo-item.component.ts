import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/Models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;

  ngOnInit(): void {
    console.log('Todo-ItemComponent Loaded');
  }

  constructor() {}
}
