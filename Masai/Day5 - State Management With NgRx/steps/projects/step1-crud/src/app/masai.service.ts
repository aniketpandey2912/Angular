import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MasaiUserService {
  url = 'http://localhost:5050/users';
  constructor(private http: HttpClient) {
    // empty
  }

  // get all users
  getAllUsers() {
    return this.http.get(this.url + '/data');
  }

  // add  user
  addUser(nUser: any) {
    return this.http.post(this.url + '/add', nUser);
  }

  // get user to update
  getUserToUpdate(userId: any) {
    return this.http.get(this.url + '/data/' + userId);
  }

  // update user
  updateUser(user: any) {
    console.log('updated:', user);

    return this.http.put(this.url + '/edit', user);
  }

  // delete user
  deleteUser(userId: any) {
    return this.http.delete(this.url + '/delete/' + userId);
  }
}
