import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  url = 'https://reqres.in/api/users?page=2';

  constructor(private http: HttpClient) {
    // empty
  }

  getUserData() {
    return this.http.get(this.url);
  }
}
