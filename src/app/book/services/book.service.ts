import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

    books : Book[] = [
      {id : 1, name: "Celestial Bodies", authors:["Jokha Alharthi"], isbn: "4628952319" },
      {id : 2, name: "Cheque book", authors:["Vasdev Mohi"], isbn: "6435243513" },
      {id : 3, name: "The Overstory", authors:["Richard Powers"], isbn: "1254521235" }

    ];
    constructor() { }

    getBooks(){
      return this.books

    }
  }

