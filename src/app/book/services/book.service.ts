import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, tap } from 'rxjs';
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
    constructor(private fb : FormBuilder, private http : HttpClient) { }

    getBooks(): Observable<Book[]>{
      return this.http.get<Book[]>("https://json-server-seven-mock.herokuapp.com/books")
    }

    addBooks(book : Book){
      return this.http.post("https://json-server-seven-mock.herokuapp.com/books", book)
    }

    editBook(book : Book){
      return this.http.put(`https://json-server-seven-mock.herokuapp.com/books/${book.id}`, book)
    }

    delete(book : Book){
      return this.http.delete(`https://json-server-seven-mock.herokuapp.com/books/${book.id}`)
    }
//-----------------------------------------------------------------------------------------------------
    
    // getBooks(){
    //   return this.books

    // }

    // addBooks(book:Book){
    //   book.id = this.id
    //   this.id++
    //   this.books.push(book)
    
    // }

    editBookForm(id:number, books : Book[]){
      this.editedBook = books.filter((book:Book) =>{
        if(book.id === id){
          return book
        }
      })
      return this.editedBook
  }

  // editBook(newBook : Book){
  //    this.books.map(book =>{
  //     if(book.id == newBook.id){
  //       book.name = newBook.name;
  //       book.authors = newBook.authors;
  //       book.isbn = newBook.isbn;
  //       console.log("from services" + book.id)
  //       console.log("newBook Id " + newBook.id)
  //       console.log(this.books)
  //     }
  //   })
  //   console.log("newBook " + newBook.id)
  
  //}
  deleteAll(){
    return this.books = []
  }

  // delete(id: number){
  //   console.log("service "+id)
  //   this.books = this.books.filter(book =>{
  //     if(book.id !== id){
  //       return book
  //     }
  //   })
  //   return this.books
  // }

}

