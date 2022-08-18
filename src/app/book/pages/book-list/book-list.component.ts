import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';




@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public books : Book[] = []
  public bookFormLink = "/book/form"
  constructor(private bookService:BookService, private router : Router) { 
    
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => this.books = data)
  }

  edit(book:Book){
    //console.log(book.id)
    this.bookService.editBookForm(book.id, this.books)
    this.bookService.editFlag = true;
    this.bookService.addFlag = false;
    
  }

  delete(book:Book){
    console.log(book.id)
    let res1 = this.bookService.delete(book)
    let res2 = this.bookService.getBooks()
    forkJoin([res1,res2]).subscribe( data => this.books = data[1])
  }

  add(){
    this.bookService.addFlag = true;
    this.bookService.editFlag = false;
  }

  deleteAll(){
    for(let book of this.books){
      this.delete(book)
    }
  }

  logout(){
    localStorage.removeItem('token')
    console.log('logged out')
    this.router.navigate(['login'])
  }
} 
