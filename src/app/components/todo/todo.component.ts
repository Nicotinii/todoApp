import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  template: `
    <form (submit)="addTask()">
      <input type="text" [(ngModel)]="newTask.title" name="title" placeholder="Title">
      <input type="text" [(ngModel)]="newTask.description" name="description" placeholder="Description">
      <button type="submit">Add</button>
    </form>

    <ul>
      <li *ngFor="let task of tasks">
        <h3>{{ task.title }}</h3>
        <p>{{ task.description }}</p>
        <button (click)="deleteTask(task.key)">Delete</button>
      </li>
    </ul>
  `
})
export class TodoComponent {
  tasks: any[] = [];
  newTask = { title: '', description: '' };

  constructor(private todoService: TodoService) {
    todoService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask(): void {
    this.todoService.addTask(this.newTask);
    this.newTask = { title: '', description: '' };
  }

  deleteTask(key: string): void {
    this.todoService.deleteTask(key);
  }
}
