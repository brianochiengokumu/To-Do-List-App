import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-project';
  model = new Model();

  getName(){
    return this.model.user;
  }
  getItems(){
    return this.model.items.filter(item => !item.done);
  }
  addItem(newItem){
    if (newItem !== ''){
      this.model.items.push(new ToDoItem(newItem, false));
    }
  }
}
