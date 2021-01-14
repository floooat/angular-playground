import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-playground';
  idCount = 1;
  todos = [];
  groceryList = [];

  addTodo(task): void {
    this.todos.push({id: this.idCount, task, done: false});
    this.idCount++;
  }

  taskDone(event): void {
    this.todos = this.todos.filter(obj => {
      return obj.id !== event;
    });
  }

  addGrocery(task): void {
    this.groceryList.push({id: this.idCount, task, done: false});
    this.idCount++;
  }
  groceryChecked(event): void {
    this.groceryList = this.groceryList.filter(obj => {
      return obj.id !== event;
    });
  }
}
