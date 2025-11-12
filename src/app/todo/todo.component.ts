import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  standalone: true

})
export class TodoComponent {

  todoList: { name: string, completed: boolean }[] = [];  // Array to hold the tasks, now with 'completed' property
  todoItem: string = '';    // Two-way bound variable for the input
  editingTaskIndex: number | null = null;  // To track the task being edited

  
  constructor() {
    // Load tasks from localStorage when the component is initialized
    this.loadTasks();
  }

  
  // Function to add a new task
  addTodo(): void {
    if (this.todoItem.trim()) {  // Check if input is not empty
      const newTask = { 
        name: this.todoItem,  // Set task name
        completed: false      // New task is not completed initially
      };
      this.todoList.push(newTask);  // Add task to the list
      this.todoItem = '';  // Clear the input field
      this.saveTasks(); // Save the updated tasks list to localStorage
    }
  }

  // Function to remove a task from the list
  removeTodo(index: number): void {
    this.todoList.splice(index, 1);  // Remove task by index
    this.saveTasks(); // Save the updated tasks list to localStorage
  }

  // Start editing a task
  editTask(index: number, task: any): void {
    this.editingTaskIndex = index;  // Set the task index being edited
    this.todoItem = task.name;      // Load the current task into the input field
  }

  // Save the edited task
  saveEdit(index: number): void {
    if (this.todoItem.trim()) {
      this.todoList[index].name = this.todoItem;  // Update the task name
      this.cancelEdit();  // Exit editing mode
      this.saveTasks(); // Save the updated tasks list to localStorage
    }
  }

  // Cancel editing
  cancelEdit(): void {
    this.editingTaskIndex = null;  // Clear the editing state
    this.todoItem = '';            // Clear the input field
  }

  // Function to toggle the task's completion status
  toggleCompletion(index: number): void {
    this.todoList[index].completed = !this.todoList[index].completed;  // Toggle the 'completed' property
    this.saveTasks();  // Save the updated tasks list to localStorage
  }

  // Save tasks to localStorage
  saveTasks(): void {
    localStorage.setItem('todoList', JSON.stringify(this.todoList)); // Convert the todoList to a JSON string and store it
  }

  // Load tasks from localStorage
  loadTasks(): void {
    const tasks = localStorage.getItem('todoList');
    if (tasks) {
      this.todoList = JSON.parse(tasks); // Parse the JSON string back to an array and assign it
    }
  }



}
