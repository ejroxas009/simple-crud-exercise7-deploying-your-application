import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  public blogs : Blog[] = [{
    id: 1,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki"

  },
  
  {
  id: 2,
  title: "The Subtle Art of Not Giving a F*ck",
  author: "Mark Manson"

  },

  {
    id: 3,
    title: "Outliers",
    author: "Malcolm Gladwell"
  }
  

]
  constructor() { }

  ngOnInit(): void {
  }

}
