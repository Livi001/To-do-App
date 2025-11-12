import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
    { path: '', component: TodoComponent },  // Standardroute (Home)
    { path: 'about', component: AboutComponent }, // About-Seite
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],  // Konfiguriere das Routing
    exports: [RouterModule],  // Exportiere RouterModule, um es in der App zu verwenden
  })
  export class AppRoutingModule {}