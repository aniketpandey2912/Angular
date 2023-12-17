import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>{{ title }}</h1>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Sl#</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of users">
            <td>{{ user.id }}</td>
            <td>
              <img
                src="{{ user.avatar }}"
                alt="{{ user.first_name }}"
                width="50px"
              />
              <!-- {{ user.avatar }} -->
            </td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'API-CALL / AJAX In Angular';
  users: any = [];

  constructor(private ud: UserService) {}

  ngOnInit() {
    this.ud.getUserData().subscribe((res: any) => {
      this.users = res?.data;
    });
  }
}
