// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('practical');
// }


import { Component } from '@angular/core';
import { DataService } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  receivedMessage: string = '';

  constructor(private dataService: DataService) {
    this.receivedMessage = this.dataService.getMessage();
  }
}