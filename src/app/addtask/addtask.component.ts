import { Component, Input, OnInit } from '@angular/core';
import { ToDoList } from 'src/todolist';

@Component({
	selector: 'app-addtask',
	templateUrl: './addtask.component.html',
	styleUrls: [ './addtask.component.css' ]
})
export class AddtaskComponent implements OnInit {
	@Input() existingList: ToDoList[] = [];
	newTask: ToDoList = { task: '', completed: false };
	taskName: string = '';

	constructor() {}

	ngOnInit(): void {}

	addTask() {
		this.newTask.task = (<HTMLInputElement>document.getElementById('Task')).value;

		this.existingList.push(this.newTask);
	}
}
