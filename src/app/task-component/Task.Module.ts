import { NgModule } from "@angular/core";
import { AddTasksComponent } from "./add-tasks/add-tasks.component";
import { TaskComponentComponent } from "./task-component.component";
import { SharedModule } from "../ui/card/shared.Module";
import { FormsModule, NgModel } from "@angular/forms";
import { UserTasksComponent } from "./user-tasks/user-tasks.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[AddTasksComponent, TaskComponentComponent,UserTasksComponent],
    exports:[TaskComponentComponent],
    imports:[SharedModule,CommonModule,FormsModule]
})
export class TaskModule{

}