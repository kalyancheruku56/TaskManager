import { Component, EventEmitter, Output, inject, signal,Input } from '@angular/core';
import { taskService } from '../Task.service';
interface submitArray {
  title:String,
  summary:String,
  dueDate:String
}
@Component({
  selector: 'app-add-tasks',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.css'
})
export class AddTasksComponent {
  enteredtitle="";
  enteredSummary="";
  enteredDuedate="";
  //using signal
  // enteredtitle=signal("");
  // enteredSummary=signal("");
  // enteredDuedate=signal("");
  private taskService = inject(taskService)
  @Input() userid :any;
@Output() OnClose = new EventEmitter<void>()
@Output() submit = new EventEmitter<{
title:any;
summary:any;
dueDate:any; }>();
onCloseTask(){
  this.OnClose.emit();
}
onSubmit(){
 
  this.taskService.addtask({
    title:this.enteredtitle,
    summary:this.enteredSummary,
    dueDate:this.enteredDuedate
  },this.userid)
  this.onCloseTask()
}

}
