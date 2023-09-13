import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  userId: string = '';
  userEmail: string = '';
  userComments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.userService.getUser(this.userId).subscribe((user: any) => {
      this.userEmail = user.email;
    });

    this.refreshComments();
  }

  refreshComments() {
    this.userService.getUserComments(this.userId).subscribe((comments: any[]) => {
      this.userComments = comments;
      // Initialize the showDeleteButton property for each comment
      this.userComments.forEach(comment => {
        comment.showDeleteButton = false;
      });
    });
  }

  toggleDeleteButton(comment: any) {
    comment.showDeleteButton = !comment.showDeleteButton;
  }

  deleteComment(commentId: string) {
    this.userService.deleteUserComment(this.userId, commentId).subscribe(() => {
      // Comment deleted, now refresh the comments
      this.refreshComments();
    });
  }

  closePanel() {
    this.router.navigate(['/']);
  }
}
