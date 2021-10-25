import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiDatabaseComponent } from './api-database/api-database.component';
import { UserFormComponent } from './api-database/user-form/user-form.component';
import { UserListComponent } from './api-database/user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'api-database', component: ApiDatabaseComponent },
      { path: 'api-database/user/data', component: UserListComponent },
      { path: 'api-database/user', component: UserFormComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
