import { Component, OnInit } from '@angular/core';
import { repositoryData } from 'src/app/interfaces/repositories';
import { UserData } from 'src/app/interfaces/users';
import { ApiDatabaseService } from '../../services/api-database.service';

@Component({
  selector: 'app-api-database',
  templateUrl: './api-database.component.html',
  styleUrls: ['./api-database.component.css']
})
export class ApiDatabaseComponent implements OnInit {

  dataUsers: UserData[] = [];
  usersNumber = 0;
  dataRepos: repositoryData[] = [];
  reposNumber = 0;

  constructor(private apiService: ApiDatabaseService) { }


  ngOnInit(): void {
    this.getAllUsersData();
    this.getAllReposData();
  }

  getAllUsersData(){
    this.apiService.getAllUserData().subscribe((resp: any) => {
      if(resp?.ok === true){
        this.dataUsers = resp.data;
        this.usersNumber = resp.total;
      }
    }, err => console.error(err));
  }

  getAllReposData(){
    this.apiService.getAllRepositoryData().subscribe((resp: any) => {
      console.log('Data ', resp);
      if(resp?.ok === true){
        this.dataRepos = resp.data;
        this.reposNumber = resp.total;
      }
    }, err => console.error(err));
  }


}
