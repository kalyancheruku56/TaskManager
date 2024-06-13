import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

// const randomeindex = Math.floor(Math.random()*DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  //standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
// type User = {
//   id:String,
//   name:String,
//   avatar:String
// }
// interface User {
//   id:String,
//   name:String,
//   avatar:String
// }

export class UserComponent {
  // @Input({required:true}) id :any;
  // @Input({required:true}) avatar :any;
  
  // @Input({required:true}) name :any;
  // one way by declaring individually or by usig object like user
  // or by using a type 
  
  // @Input({required:true}) user !:User;

  // or by using interface  by using interface we can only define object types


  @Input({required:true}) user !:
  {
    id:String,
    name:String,
    avatar:String
  }
  get imagePath(){
    return 'assets/users/'+this.user.avatar;
  }
  @Input() Count :any;
  @Input() selecteduserName!:boolean;
  @Output() selecteduser = new EventEmitter();
  @Output() mouse = new EventEmitter();
  onclicked(){
this.selecteduser.emit(this.user.id);
  }
  onMouseOver(){
    this.mouse.emit(this.user.id);
      }
}
