import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
    id:number = 4
    editedBook:Book[]|undefined
    addFlag = false;
    editFlag = false;
    books : Book[] = [
      {id : 1, name: "Celestial Bodies", authors:["Jokha Alharthi"], isbn: "4628952319" },
      {id : 2, name: "Cheque book", authors:["Vasdev Mohi"], isbn: "6435243513" },
      {id : 3, name: "The Overstory", authors:["Richard Powers"], isbn: "1254521235" }

    ];

    editedForm : FormGroup | undefined
    constructor(private fb : FormBuilder) { }

    getBooks(){
      return this.books

    }

    addBooks(book:Book){
      book.id = this.id
      this.id++
      this.books.push(book)
    
    }

    editBookForm(id:number){
      this.editedBook = this.books.filter((book:Book) =>{
        if(book.id === id){
          return book
        }
      })
      return this.editedBook
  }

  editBook(newBook : Book){
     this.books.map(book =>{
      if(book.id == newBook.id){
        book.name = newBook.name;
        book.authors = newBook.authors;
        book.isbn = newBook.isbn;
        console.log("from services" + book.id)
        console.log("newBook Id " + newBook.id)
        console.log(this.books)
      }
    })
    console.log("newBook " + newBook.id)
  
  }
  deleteAll(){
    return this.books = []
  }

  delete(id: number){
    console.log("service "+id)
    this.books = this.books.filter(book =>{
      if(book.id !== id){
        return book
      }
    })
    return this.books
  }

}

