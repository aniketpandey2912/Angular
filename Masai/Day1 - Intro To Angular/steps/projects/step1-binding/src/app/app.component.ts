import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>APP :- step1-binding</h1>

      <h2>Binding In Angular</h2>
      <!-- Various ways of binding  -->

      <!-- 1- Interpolation -->
      <h1>Interpolation</h1>
      <h3>{{ title }}</h3>
      <hr />
      <!-- 2- Below are attribute binding -->
      <h1>Attributes Binding</h1>
      <h3 [innerHtml]="title"></h3>
      <h3 [innerText]="title"></h3>
      <h3 innerText="{{ title }}"></h3>
      <h3 [textContent]="title"></h3>
      <hr />
      <!-- Property Binding -->
      <h1>Property Binding</h1>
      <h3 bind-innerHtml="title"></h3>
      <h3 bind-innerText="title"></h3>
      <h3 bind-textContent="title"></h3>

      <hr />
      <h1>Value Binding</h1>
      <input type="text" [value]="title" />
      <input [type]="type" />

      <hr />
      <h1>Function/Event Binding</h1>
      <h3>{{ message() }}</h3>
      <button (click)="clickHandler(title)">Click Me</button>

      <hr />
      <!-- Template Reference - Ability to access some html element -->
      <input #ti type="text" />
      <button (click)="templateReferenceHandler(ti)">
        Template Reference Handler
      </button>
      <hr />

      <!-- 2 way Data Binding -->
      <input
        #countTi
        type="number"
        [value]="count"
        (input)="count = countTi.value"
      />
      <h3>Count: {{ count }}</h3>
      <hr />
      <!-- FormsModule & 2-way Binding -->
      <h1>FormsModule & 2-way Binding</h1>
      <input type="number" [(ngModel)]="count2" />
      <h3>Count2: {{ count2 }}</h3>
    </div>
  `,
})
export class AppComponent {
  title = 'step1-binding';
  type = 'range';
  message = () => 'Message returned by a function';

  clickHandler(desc = 'Default description') {
    alert(desc);
  }

  templateReferenceHandler(element: any) {
    console.log('Element:', element);
    console.log('Value:', element.value);
  }

  count: any = 0;
  count2: any = 0;
}
