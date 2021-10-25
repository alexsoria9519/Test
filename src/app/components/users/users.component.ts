import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  showUser(user: UserData){
    this.router.navigate(['api-database/user/data'], { queryParams: { user: user._id} });
  }

  updateUser(user: UserData){
    this.router.navigate(['api-database/user'], { queryParams: { user: user._id, key: 'update' } });
  }

  deleteUser(user: UserData){
    this.router.navigate(['api-database/user'], { queryParams: { user: user._id, key: 'delete' } });
  }


}
