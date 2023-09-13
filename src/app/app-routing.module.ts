import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserPanelComponent } from './user/user-panel/user-panel.component';

const routes: Routes = [   { path: '', component: UserListComponent },
{ path: 'user/:id', component: UserPanelComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
