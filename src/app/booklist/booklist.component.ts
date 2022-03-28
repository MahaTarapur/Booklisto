import { Component, OnInit } from '@angular/core';
import { Booklist } from './booklist';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  bookList:Booklist[] = [

    new Booklist(1,"maha","mahabharat",700),
    new Booklist(2,"rahul","the life",1500),
    new Booklist(3,"gouri","the photo world",2000)

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
