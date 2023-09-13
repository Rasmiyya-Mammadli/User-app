import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://63761992b5f0e1eb850298da.mockapi.io';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }

  getUser(userId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${userId}`);
  }

  getUserComments(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users/${userId}/user-comments`);
  }

  deleteUserComment(userId: string, userCommentId: string): Observable<any> {
    const apiUrl = `https://63761992b5f0e1eb850298da.mockapi.io/users/${userId}/user-comments/${userCommentId}`;
    return this.http.delete(apiUrl);
  }
  
}
