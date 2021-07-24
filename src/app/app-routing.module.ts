import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchRepositoryComponent } from './search-repository/search-repository.component' 
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
  { path: 'searchuser', component: SearchUserComponent },
  { path: 'searchrepository', component: SearchRepositoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
