import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';



@Component({
  selector: 'app-root',
  imports: [RouterModule, TodoComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'To-do liste';
  
}



