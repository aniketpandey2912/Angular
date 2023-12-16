import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <div>
      <h1>Helloworld App</h1>
      <hr />
      <vijay-comp></vijay-comp>
    </div>
  `,
})
export class AppComponent {
  title = 'helloworld';
}
