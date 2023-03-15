import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private tasksRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.tasksRef = db.list('tasks');
  }

  getTasks(): Observable<any[]> {
    return this.tasksRef.valueChanges();
  }

  addTask(task: any): void {
    this.tasksRef.push(task);
  }

  updateTask(task: any): void {
    this.tasksRef.update(task.key, task);
  }

  deleteTask(key: string): void {
    this.tasksRef.remove(key);
  }
}
