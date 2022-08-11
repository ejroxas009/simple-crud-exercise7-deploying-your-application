import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs : Blog[] = [
    {id : 1, name: "Celestial Bodies", authors:["Jokha Alharthi"], isbn: "4628952319" },
    {id : 2, name: "Cheque book", authors:["Vasdev Mohi"], isbn: "6435243513" },
    {id : 3, name: "The Overstory", authors:["Richard Powers"], isbn: "1254521235" }

  ];

  constructor() { }

  getBlogs(){
    return this.blogs

  }
}
