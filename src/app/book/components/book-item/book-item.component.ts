import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  public book = [{
    id: 1,
    title: "ABCD",
    author: "author1"

  },
  
  {
  id: 2,
  title: "BCDE",
  author: "author2"

  }
  

]
  constructor() { }

  ngOnInit(): void {
  }

}
