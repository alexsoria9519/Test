import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { PagesComponent } from '../pages/pages.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
