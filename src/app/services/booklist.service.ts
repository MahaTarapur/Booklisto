import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booklist } from '../booklist/booklist';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  constructor(private service:HttpClient) {

   }

  getBookList()
  {
    return this.service.get("https://api.covidtracking.com/v1/states/current.json");
  }
}