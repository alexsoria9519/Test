import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/interfaces/users';
import { ApiDatabaseService } from 'src/app/services/api-database.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  // user: UserData = {};
  user: UserData = {};
  userId: any;
  key: any;
  constructor(private route: ActivatedRoute, private apiService: ApiDatabaseService) { }

  async ngOnInit() {
    const userId = this.route.snapshot.queryParamMap.get('user');
    const key = this.route.snapshot.queryParamMap.get('key');
    this.userId = userId;
    this.key = key;
    let data = await this.loadData();
    //this.user = data;
  }

  loadData(){
    return new Promise((resolve, reject) => {
      this.apiService.getUserData(this.userId).subscribe((resp: any) => {
        if(resp?.ok === true){
          resolve(resp?.data);
        }
      }, err => reject(err));
    });
  }




}
