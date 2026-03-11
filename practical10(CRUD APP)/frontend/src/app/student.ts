import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Student {
  url = 'http://localhost:3000/students';
  constructor(private http :HttpClient){}
  getStudents(){
    return this.http.get<any[]>(this.url);
  }
}
