import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IsearchUser } from '../interfaces/search-user'
import { User } from '../model/user';



@Injectable({
  providedIn: 'root',
})
export class SearchUserRequestService {
  users!: User;

  constructor(private http: HttpClient) {
    this.users = new User();
  }

  getUsers(searchuserQuery: string) {
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<IsearchUser>(
          `https://api.github.com/users/${searchuserQuery}`
        )
        .toPromise()
        .then(
          (response) => {
            this.users.name = response.name;
            this.users.avatar_url = response.avatar_url;
            this.users.bio = response.bio;
            this.users.html_url = response.html_url;
            this.users.created_at=response.created_at
            resolve();
          },
          (error) => {
            this.users.name = 'Not Found';
            this.users.avatar_url = 'Not Found';
            this.users.bio = 'Not Found';
            this.users.html_url = 'Not Found';
            reject(error);
          }
        );
    });
    return promise;
  }

  searchrepos(searchuserQuery:string) {
    return this.http.get(
      `https://api.github.com/users/${searchuserQuery}/repos?`
    );
  }
}
