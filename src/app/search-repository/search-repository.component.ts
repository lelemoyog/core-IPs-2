import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Repo } from '../model/repo';
import { SearchRepoRequestService } from '../services/search-repo-request.service'

@Component({
  selector: 'app-search-repository',
  templateUrl: './search-repository.component.html',
  styleUrls: ['./search-repository.component.css'],
})
export class SearchRepositoryComponent implements OnInit {
  searchRepoQuery!: string;
  repos!: Repo;

  constructor(private SearchRepoRequestService: SearchRepoRequestService) {}
  search(){
    this.searchrepo(this.searchRepoQuery)
  }

  searchrepo(searchRepoQuery: string) {
    this.SearchRepoRequestService.reporequest(searchRepoQuery);
    this.repos=this.SearchRepoRequestService.repo
  }

  ngOnInit(): void {}
}
