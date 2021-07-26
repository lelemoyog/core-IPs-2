import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IsearchRepo } from '../interfaces/search-repo';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../model/repo';

@Injectable({
  providedIn: 'root',
})
export class SearchRepoRequestService {
  repo!: Repo;

  constructor(private http: HttpClient) {}

  reporequest(searchRepoQuery: string) {
    return this.http.get<IsearchRepo>(
      `https://api.github.com/search/repositories?q=${searchRepoQuery}`
    );
  }
}
