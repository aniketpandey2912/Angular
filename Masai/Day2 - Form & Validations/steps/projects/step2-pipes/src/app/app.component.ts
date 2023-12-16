import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Pipes/Formatters In Angular</h1>
      <hr />
      <ol>
        <li *ngFor="let hero of heroes">{{ hero.title }}</li>
      </ol>
      <hr />

      <table class="table table-striped table-hover table-sm table-responsive">
        <thead class="table-dark">
          <tr>
            <th>Sl#</th>
            <th>Title</th>
            <th>Photo</th>
            <th>Full-Name</th>
            <th>City</th>
            <th>Ticket Price</th>
            <th>Release Date</th>
            <th>Movies List</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let hero of heroes">
            <td>{{ hero.sl }}</td>
            <td>{{ hero.title | uppercase }}</td>
            <td>
              <img
                src="{{ hero.poster }}"
                alt="{{ hero.poster }}"
                width="50px"
                height="60px"
              />
            </td>
            <td>{{ hero.firstname + ' ' + hero.lastname }}</td>
            <td>{{ hero.city }}</td>
            <td>
              {{ hero.ticketprice | currency : 'INR' : 'code' : '4.2-4' }}
            </td>
            <td>{{ hero.releasedate | date : 'dd/MM/yyyy' }}</td>
            <td>
              <button class="btn btn-primary">
                {{ hero.movieslist.length }}
              </button>
              <li *ngFor="let movie of hero.movieslist">
                <img
                  src="{{ movie.poster }}"
                  alt="{{ movie.title }}"
                  width="20px"
                  height="20px"
                />
                {{ movie.title }}
              </li>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div>
        <ul>
          <li *ngFor="let item of heroes[0] | keyvalue">
            {{ item.key + '~' + item.value }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'step2-pipes';

  heroes = [
    {
      sl: 1,
      title: 'Captain America',
      gender: 'male',
      firstname: 'Captain FirstName',
      lastname: 'Captain LastName',
      city: 'Captain City',
      ticketprice: '123.45',
      releasedate: '1/26/2018',
      poster: 'assets/images/captainamerica.jpg',
      movieslist: [
        {
          title: 'Captain America 1',
          poster: 'assets/images/captainamerica.jpg',
        },
        {
          title: 'Captain America 2',
          poster: 'assets/images/captainamerica.jpg',
        },
        {
          title: 'Captain America 3',
          poster: 'assets/images/captainamerica.jpg',
        },
      ],
    },
    {
      sl: 2,
      title: 'Deadpool',
      gender: 'male',
      firstname: 'Deadpool FirstName',
      lastname: 'Deadpool LastName',
      city: 'Deadpool City',
      ticketprice: '223.47',
      releasedate: '1/26/2018',
      poster: 'assets/images/deadpool.jpg',
      movieslist: [
        {
          title: 'Deadpool 1',
          poster: 'assets/images/deadpool.jpg',
        },
        {
          title: 'Deadpool 2',
          poster: 'assets/images/deadpool.jpg',
        },
        {
          title: 'Deadpool 3',
          poster: 'assets/images/deadpool.jpg',
        },
      ],
    },
    {
      sl: 3,
      title: 'Hulk',
      gender: 'male',
      firstname: 'Hulk FirstName',
      lastname: 'Hulk LastName',
      city: 'Hulk City',
      ticketprice: '123.4577',
      releasedate: '1/26/2018',
      poster: 'assets/images/hulk.jpg',
      movieslist: [
        {
          title: 'Hulk 1',
          poster: 'assets/images/hulk.jpg',
        },
        {
          title: 'Hulk 2',
          poster: 'assets/images/hulk.jpg',
        },
        {
          title: 'Hulk 3',
          poster: 'assets/images/hulk.jpg',
        },
      ],
    },
    {
      sl: 4,
      title: 'Ironman',
      gender: 'male',
      firstname: 'Ironman FirstName',
      lastname: 'Ironman LastName',
      city: 'Ironman City',
      ticketprice: '323.45',
      releasedate: '1/26/2022',
      poster: 'assets/images/ironman.jpg',
      movieslist: [
        {
          title: 'Ironman 1',
          poster: 'assets/images/ironman.jpg',
        },
        {
          title: 'Ironman 2',
          poster: 'assets/images/ironman.jpg',
        },
        {
          title: 'Ironman 3',
          poster: 'assets/images/ironman.jpg',
        },
      ],
    },
    {
      sl: 5,
      title: 'Spider Man',
      gender: 'male',
      firstname: 'Spider Man FirstName',
      lastname: 'Spider Man LastName',
      city: 'Spider Man City',
      ticketprice: '423.45',
      releasedate: '1/26/2012',
      poster: 'assets/images/spiderman.jpg',
      movieslist: [
        {
          title: 'Spider Man 1',
          poster: 'assets/images/spiderman.jpg',
        },
        {
          title: 'Spider Man 2',
          poster: 'assets/images/spiderman.jpg',
        },
        {
          title: 'Spider Man 3',
          poster: 'assets/images/spiderman.jpg',
        },
      ],
    },
    {
      sl: 6,
      title: 'Thor',
      gender: 'male',
      firstname: 'Thor FirstName',
      lastname: 'Thor LastName',
      city: 'Thor City',
      ticketprice: '123.453333',
      releasedate: '1/26/2018',
      poster: 'assets/images/thor.jpg',
      movieslist: [
        {
          title: 'Thor 1',
          poster: 'assets/images/thor.jpg',
        },
        {
          title: 'Thor 2',
          poster: 'assets/images/thor.jpg',
        },
        {
          title: 'Thor 3',
          poster: 'assets/images/thor.jpg',
        },
      ],
    },
  ];
}
