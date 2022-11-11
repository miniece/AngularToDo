import { Component } from '@angular/core';
import { ToDoList } from 'src/todolist';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	tasks: ToDoList[] = [
		{ task: 'Cry', completed: false },
		{ task: 'Wallow in self pity', completed: false },
		{ task: 'Contemplate life choices', completed: false },
		{ task: 'Have a refreshing drink', completed: true },
		{ task: 'Cry a little more', completed: false },
		{ task: 'Eat a fruit', completed: false }
	];
	title = 'ToDo';

	completeTask(index: number) {
		if (index !== -1) {
			let t: ToDoList = this.tasks[index];
			t.completed = true;
		}
	}
}
