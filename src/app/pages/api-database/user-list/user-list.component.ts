import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/interfaces/users';
import { ApiDatabaseService } from 'src/app/services/api-database.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent implements OnInit {

  user: UserData = { "_id" : ""};
  userId: any;
  constructor( private route: ActivatedRoute, private apiService: ApiDatabaseService) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.queryParamMap.get('user');
    this.userId = userId;
    console.log(userId); // Pepperoni
    this.loadData();
  }

  loadData(){
    this.apiService.getUserData(this.userId).subscribe((resp: any) => {
      console.log('Data ', resp);
      if(resp?.ok === true){
        this.user = resp.data;
      }
    }, err => console.error(err));
  }

}
