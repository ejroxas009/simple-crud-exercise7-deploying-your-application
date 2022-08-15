import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';




@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public books : Book[] = []
  public bookFormLink = "/book/form"
  constructor(private bookService:BookService) { 
    
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks()
  }

  edit(book:Book){
    //console.log(book.id)
    this.bookService.editBookForm(book.id)
    this.bookService.editFlag = true;
    this.bookService.addFlag = false;
    
  }

  delete(book:Book){
    console.log(book.id)
    this.books = this.bookService.delete(book.id)
  }

  add(){
    this.bookService.addFlag = true;
    this.bookService.editFlag = false;
  }

  deleteAll(){
   this.books =  this.bookService.deleteAll()
  }

} 
