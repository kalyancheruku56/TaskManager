import { Component,Input } from '@angular/core';
//import{dummy_task} from 'D:\Angular Office\first-app\src\app\task-component\user-tasks\dummy-usertasks.ts'
import { taskService } from './Task.service';
@Component({
  selector: 'app-task-component',
  // standalone: true,
  //imports: [UserTasksComponent,AddTasksComponent,CardComponent],
  templateUrl: './task-component.component.html',
  styleUrl: './task-component.component.css'
})
export class TaskComponentComponent {
@Input() name ? :any;
@Input() Selectuserid ?:any;
addTaskBtn=false;
// dummy_task=dummyTasks;
constructor(private taskService:taskService){

}
get SelectuseridF(){
 return this.taskService.getUserTask(this.Selectuserid)
}
completetask(id:any){

}
onaddtask(){
this.addTaskBtn=true;
}
onClose(){
  this.addTaskBtn=false;
  }

}
