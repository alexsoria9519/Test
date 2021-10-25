import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ApiDatabaseService {

  constructor(private http: HttpClient) { }

  getAllUserData() {
    return this.http.get(`${base_url}user/all`);
  }

  getUserData(id: string){
    return this.http.get(`${base_url}user/${id}`);
  }


  getAllRepositoryData() {
    return this.http.get(`${base_url}repos/all`);
  }

  getRepoData(id: string){
    return this.http.get(`${base_url}repos/${id}`);
  }

}
