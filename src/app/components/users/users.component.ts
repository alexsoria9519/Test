import { Component, Input, OnInit } from '@angular/core';
import { UserData } from '../../interfaces/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };

  @Input() dataUsers: UserData[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  showUser(user: UserData){
    console.log(user);
  }

  updateUser(user: UserData){
    console.log(user);
  }

  deleteUser(user: UserData){
    console.log(user);
  }


}
