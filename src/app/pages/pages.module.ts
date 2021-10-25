import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ApiDatabaseComponent } from './api-database/api-database.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from '../components/users/users.component';
import { UserComponent } from '../components/users/user/user.component';
import { RepositoryComponent } from '../components/repositories/repository/repository.component';
import { RepositoriesComponent } from '../components/repositories/repositories.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ApiDatabaseComponent,

    UsersComponent,
    UserComponent,
    RepositoryComponent,
    RepositoriesComponent
  ],
  exports: [
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PagesModule { }
