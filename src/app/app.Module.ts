import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponet } from "../header/header.component";
import { TaskComponentComponent } from "./task-component/task-component.component";
import { AddTasksComponent } from "./task-component/add-tasks/add-tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserComponent } from "./user/user.component";
import { FormsModule } from "@angular/forms";
import { CardComponent } from "./ui/card/card.component";
import { UserTasksComponent } from "./task-component/user-tasks/user-tasks.component";
import { NgModel } from '@angular/forms';
import { SharedModule } from "./ui/card/shared.Module";
import { TaskModule } from "./task-component/Task.Module";
@NgModule({
    declarations: [AppComponent, HeaderComponet, UserComponent, ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule,SharedModule,TaskModule]
})
export class AppModule{

}