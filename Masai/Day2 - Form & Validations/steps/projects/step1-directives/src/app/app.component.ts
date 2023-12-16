import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Directives In Angular</h1>
      <hr />

      <div>
        <h2>*ngFor & *ngIf directive</h2>
        <ol>
          <li
            *ngFor="
              let hero of avengers;
              index as idx;
              first as fst;
              last as lst;
              odd as od;
              even as ev
            "
          >
            <span *ngIf="fst === true">First Avenger >> </span>
            <span *ngIf="lst === true">Last Avenger >> </span>
            <span *ngIf="!fst && !lst">Inbetween Avenger >> </span>
            <span *ngIf="od">ODD Hero >> </span>
            <span *ngIf="ev">EVEN Hero >> </span>
            {{ hero }} ~ {{ idx }}
          </li>
        </ol>

        <!-- When we don't want to use any tag -->
        <ng-template ngFor let-hero [ngForOf]="avengers">{{
          hero
        }}</ng-template>
      </div>
      <hr />

      <div>
        <h2>*ngSwitch Directive</h2>
        <!-- Without FormsModule -->
        <p>Without "FormsModule"</p>
        <input
          #rangeTi
          type="range"
          [min]="0"
          [max]="5"
          [value]="rating"
          (input)="ratingHandler(rangeTi.value)"
        />
        <span>{{ rating }}</span>

        <!-- With FormModule -->
        <p>With "FormsModule"</p>
        <input type="range" [min]="0" [max]="5" [(ngModel)]="rating" />

        <div [ngSwitch]="rating">
          <h3 class="rating" *ngSwitchCase="1">*</h3>
          <h3 class="rating" *ngSwitchCase="2">**</h3>
          <h3 class="rating" *ngSwitchCase="3">***</h3>
          <h3 class="rating" *ngSwitchCase="4">****</h3>
          <h3 class="rating" *ngSwitchCase="5">*****</h3>
          <h3 class="rating" *ngSwitchDefault>Not Rated</h3>
        </div>
      </div>
      <hr />
      <div>
        <h2>ngNonBindable Directive</h2>
        <div>
          <!-- Below will throw err -->
          <!-- <h3>{{hello masai}}</h3> -->

          <h3 ngNonBindable>{{hello masai}}</h3>
        </div>
      </div>
      <hr />
      <div>
        <h2>[ngStyle] directive</h2>

        <!-- [style] will not allow conditional styling -->
        <div [style]="styleProps">
          [style] : Will not allow conditional styling
        </div>

        <div
          [ngStyle]="{
            backgroundColor: +rating <= 2 ? bgCol1 : bgCol2,
            padding: '10px',
            marginTop: '10px'
          }"
        >
          [ngStyle] : It allows conditional styling
        </div>

        <div [ngClass]="{ yellowBox: +rating < 2, greenBox: +rating > 2 }">
          [ngClass] : It allows class wise styling and can be conditional
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .rating {
        margin: 0px;
        font-family: arial;
        color: goldenrod;
      }

      .yellowBox {
        background-color: yellow;
        margin-top: 10px;
        padding: 20px;
      }
      .greenBox {
        background-color: lightgreen;
        margin-top: 10px;
        padding: 20px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'step1-directives';
  avengers = [
    'Ironman',
    'Spiderman',
    'Hulk',
    'Thor',
    'Dr Strange',
    'Captain America',
    'Black Widow',
    'Hawkeye',
    'Groot',
  ];

  rating: number | string = 1;
  ratingHandler(value: number | string) {
    console.log(value);

    this.rating = value;
  }

  styleProps = 'backgroundColor:lightblue; padding:10px';
  bgCol1 = 'yellow';
  bgCol2 = 'lightgreen';
  // bgCol = +this.rating <= 2 ? 'yellow' : 'lightgreen';
}
