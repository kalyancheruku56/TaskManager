import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponet } from '../header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TaskComponentComponent } from './task-component/task-component.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponet,UserComponent,TaskComponentComponent,NgFor,NgIf], // we have to import if it used in html file
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'first-app';
  users =DUMMY_USERS;
  selecteduserid?:String;
  Onselecteduserparent(id:any){
    this.selecteduserid=id;
    console.log("Selected user id"+this.selecteduserid);
   }
  get selectedUseridParent(){
    return this.users.find((user)=>user.id===this.selecteduserid)
  }

}
