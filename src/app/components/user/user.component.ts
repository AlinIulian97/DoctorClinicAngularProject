import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit
 {

  users: User[] = [];
  findUser: User;
  userId: number;

  constructor(private userService: UserService) {}


  ngOnInit(): void {
  this.getUser;
 
   }



  getUser(userId) : void {
   this.userService.getUser(userId).subscribe(
    data => this.findUser = data
   );
   console.log(this.findUser.password);
   console.log(this.findUser.userName);
  }



}

  

