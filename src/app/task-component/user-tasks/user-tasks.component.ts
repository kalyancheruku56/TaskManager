import { Component,EventEmitter,Input, Output, inject } from '@angular/core';
import { taskService } from '../Task.service';
//import{SpecFicTask} from './user-task.model'
interface SpecFicTask {
  id:String,
  userId:String,
  title:String,
  summary:String,
  dueDate:String
}
@Component({
  selector: 'app-user-tasks',
  // standalone: true,
  // imports: [],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css'
})
export class UserTasksComponent {
  @Input({required:true}) taskname! :SpecFicTask;
  @Output() selectedTask = new EventEmitter()
  @Input() taskid :any;
  private taskService = inject(taskService)
  completeTask(){
    this.taskService.completeTask(this.taskid)
  }
}
