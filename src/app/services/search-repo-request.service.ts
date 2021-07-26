import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IsearchRepo } from '../interfaces/search-repo';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../model/repo';


@Injectable({
  providedIn: 'root',
})
export class SearchRepoRequestService {
repo!:Repo

  constructor(private http: HttpClient) {}

  reporequest(searchRepoQuery: string){
    let promise = new Promise<void>((resolve,reject)=>{
      this.http
        .get<IsearchRepo>(
          `${environment.base_url1}q=${searchRepoQuery}{&sort}&api_key=${environment.token}`
        )
        .toPromise()
        .then(
          (response) => {
            this.repo.description = response.description;
            this.repo.full_name = response.full_name;
            this.repo.html_url = response.html_url;
            this.repo.name = response.name;

            resolve();
          },
          (error) => {
            this.repo.description = 'not found';
            reject(error);
          }
        );
    })
    return promise
  }
}
