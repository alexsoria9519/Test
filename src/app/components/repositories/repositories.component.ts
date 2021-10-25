import { Component, Input, OnInit } from '@angular/core';
import { repositoryData } from '../../interfaces/repositories';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  @Input() dataRepos: repositoryData[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  showRepository(repository: repositoryData){
    console.log(repository);
  }

  updateRepository(repository: repositoryData){
    console.log(repository);
  }

  deleteRepository(repository: repositoryData){
    console.log(repository);
  }


}
