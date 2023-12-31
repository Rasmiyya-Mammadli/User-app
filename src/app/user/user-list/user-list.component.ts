import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  selectedUserId: string | null = null;
  userComments: any[] = [];
  

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users: any[]) => {
      this.users = users;
    });
  }

  showComments(userId: string) {
    this.selectedUserId = userId;
    this.userService.getUserComments(userId).subscribe((comments: any[]) => {
      this.userComments = comments;
    });
  }

  selectUser(userId: string) {
    this.router.navigate(['/user', userId]);
  }
}
