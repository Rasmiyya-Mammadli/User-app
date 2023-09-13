import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ UserListComponent, UserPanelComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class UserModule { }
