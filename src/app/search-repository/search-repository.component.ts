import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-repository',
  templateUrl: './search-repository.component.html',
  styleUrls: ['./search-repository.component.css'],
})
export class SearchRepositoryComponent implements OnInit {
  searchRepoQuery!: string;

  constructor() {}
  searchrepo(){};

  ngOnInit(): void {}
}
