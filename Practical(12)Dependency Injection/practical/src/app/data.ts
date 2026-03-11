// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class Data {
  
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  message: string = "Hello from Data Service!";

  getMessage() {
    return this.message;
  }
}