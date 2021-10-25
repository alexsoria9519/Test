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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { UserListComponent } from './api-database/user-list/user-list.component';
import { UserFormComponent } from './api-database/user-form/user-form.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ApiDatabaseComponent,

    UsersComponent,
    UserComponent,
    RepositoryComponent,
    RepositoriesComponent,
    UserListComponent,
    UserFormComponent
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
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ]
})
export class PagesModule { }
