import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { SearchUserRequestService } from '../services/search-user-request.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
})
export class SearchUserComponent implements OnInit {
  searchuserQuery!: string;
  user!: User;
  repos!: any[]

  constructor(
    private SearchUserRequestService: SearchUserRequestService,
    private HttpClient: HttpClient
  ) {
    
  }

   search(){
     this.searchUser(),
     this.searchRepos(this.searchuserQuery)
   }

  searchUser() {
    this.SearchUserRequestService.getUsers(this.searchuserQuery);
    this.user = this.SearchUserRequestService.users;
    console.log(this.user);
  }
  searchRepos(searchuserQuery: string) {
    this.SearchUserRequestService.searchrepos(searchuserQuery).subscribe(
      (response: any) => {
        this.repos = (response);
        console.log(this.repos)
      }
    );
  }

  ngOnInit() {}
}
