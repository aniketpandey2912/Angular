import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <div>
        <input #msgti type="text" (change)="message = msgti.value" />
        <span>-This input will change message's value in AppComponent.</span>
      </div>
      <br />

      <div>
        <input type="checkbox" (change)="show = !show" />
        <span>- To toggle the view of ChildComponent</span>
      </div>
      <br />

      <div>
        <input
          #rngTi
          type="range"
          [min]="1"
          [max]="20"
          [value]="power"
          (change)="power = rngTi.value"
        />
        <strong>{{ power }}</strong>
        <span> - To change power's value</span>
      </div>

      <hr />

      <app-child *ngIf="show" [power]="power" [message]="message"></app-child>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  title: any = 'step1-lifecycle';
  message: any = `AppComponent's message`;
  power: any = 1;
  show: any = true;

  // It is the first thing that happens
  constructor() {
    console.log("AppComponent's constructor was called");
  }

  // Whenver some property updates, ngOnChanges is called
  ngOnChanges(changes: SimpleChanges) {
    console.log(`AppComponent's ngOnChanges was called`);
    console.log(changes);
  }

  // Once all properties are initialized, ngOnit is called
  ngOnInit() {
    console.log(`AppComponent's ngOnit was called`);
  }

  // Whenver component is destroyed from DOM, ngOnDestroy is called
  ngOnDestroy() {
    console.log(`AppComponent's ngOnDestroy was called`);
  }
}
