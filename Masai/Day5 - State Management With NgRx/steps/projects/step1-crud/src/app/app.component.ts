import { Component, OnInit } from '@angular/core';
import { MasaiUserService } from './masai.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>AppComponent</h1>
      <hr />

      <div *ngIf="show">
        <h2>Add New User</h2>
        <div>
          <div>
            <input
              placeholder="username"
              id="username"
              [(ngModel)]="newuser.username"
            />
          </div>
          <div>
            <input
              placeholder="usermail"
              id="usermail"
              [(ngModel)]="newuser.usermail"
            />
          </div>
          <div>
            <input
              placeholder="usercity"
              id="usercity"
              [(ngModel)]="newuser.usercity"
            />
          </div>
          <button (click)="addUserHandler()">Add New User</button>
        </div>
      </div>
      <hr />

      <div *ngIf="showEdit">
        <h2>Edit User</h2>
        <div>
          <div>
            <input
              placeholder="edit_username"
              id="edit_username"
              [value]="edituser.username"
              [(ngModel)]="edituser.username"
            />
          </div>
          <div>
            <input
              placeholder="edit_usermail"
              id="edit_usermail"
              [value]="edituser.usermail"
              [(ngModel)]="edituser.usermail"
            />
          </div>
          <div>
            <input
              placeholder="edit_usercity"
              id="edit_usercity"
              [value]="edituser.usercity"
              [(ngModel)]="edituser.usercity"
            />
          </div>
          <button (click)="editSelectedUserHandler()">Edit User</button>
        </div>
        <hr />
      </div>

      <div>
        <h2>Userlist</h2>
        <table>
          <thead>
            <th>Sl#</th>
            <th>User Name</th>
            <th>User City</th>
            <th>User Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>
          <tbody>
            <tr *ngFor="let user of userslist; index as idx">
              <td>{{ idx + 1 }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.usercity }}</td>
              <td>{{ user.usermail }}</td>
              <td>
                <button (click)="editSelectedUser(user._id)">Edit</button>
              </td>
              <td>
                <button (click)="deleteSelectedUser(user._id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'step1-crud';
  userslist: any = [];
  userIndex: any = 0;

  show = true;
  newuser: any = {
    username: '',
    usercity: '',
    usermail: '',
  };

  showEdit = false;
  edituser = {
    _id: '',
    username: '',
    usercity: '',
    usermail: '',
  };
  constructor(private us: MasaiUserService) {
    // empty
  }

  refresh() {
    this.us.getAllUsers().subscribe((res) => {
      console.log(res);
      this.userslist = res;
    });
  }

  ngOnInit() {
    this.refresh();
  }

  addUserHandler() {
    console.log(this.newuser);
    this.us.addUser(this.newuser).subscribe((res: any) => {
      this.refresh();
      // console.log(res);
      if (res.message) {
        alert(res.message);
        this.newuser = {
          username: '',
          usercity: '',
          usermail: '',
        };
      }
    });
  }

  editSelectedUser(uid: any) {
    this.us.getUserToUpdate(uid).subscribe((res: any) => {
      // console.log(res);
      this.edituser = res;
      console.log(this.edituser);
      this.showEdit = !this.showEdit;
      this.show = !this.show;
    });
  }

  editSelectedUserHandler() {
    this.us.updateUser(this.edituser).subscribe((res: any) => {
      this.refresh();
      // console.log(res);
      this.edituser = {
        _id: '',
        username: '',
        usercity: '',
        usermail: '',
      };
      if (res.message) {
        alert(res.message);
      }
      this.showEdit = !this.showEdit;
      this.show = !this.show;
    });
  }

  deleteSelectedUser(uid: any) {
    this.us.deleteUser(uid).subscribe((res: any) => {
      // console.log(res);
      this.refresh();
      if (res.message) {
        alert(res.message);
      }
    });
  }
}
