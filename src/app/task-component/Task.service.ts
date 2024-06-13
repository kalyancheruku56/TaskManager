import { Injectable } from '@angular/core'
import {addtasktype} from './tasktype.Model'
import { jsDocComment } from '@angular/compiler'
@Injectable({
    providedIn:'root'
})
export class taskService{
   
    private tasks= [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
      ]
      constructor(){
        const tasks = localStorage.getItem("tasks")
        if(tasks){
            this.tasks=JSON.parse(tasks)
        }
    }
      getUserTask(id:String)
      {
        return this.tasks.filter((task)=>task.userId===id)
      }
      addtask(tskdata:addtasktype,userId:any){
        this.tasks.push({
            id:'u123',
            userId:userId,
            title:tskdata.title,
            summary:tskdata.summary,
            dueDate:tskdata.dueDate, 
            
            
              })
              this.savetasks()
      }
      completeTask(id:String){
        this.tasks=this.tasks.filter((task)=>task.id!==id)
     this.savetasks()
      }
      savetasks(){
        localStorage.setItem("tasks",JSON.stringify(this.tasks))
      }
}