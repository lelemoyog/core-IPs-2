import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { SearchUserRequestService } from '../services/search-user-request.service';


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
})
export class SearchUserComponent implements OnInit {
  searchuserQuery!: string;
  user!: User;

  constructor(private SearchUserRequestService: SearchUserRequestService) {}

  searchUser(){
    this.SearchUserRequestService.getUsers(this.searchuserQuery);
    this.user = this.SearchUserRequestService.users;
    console.log(this.user)
  }

  ngOnInit() {
    
  }
}
