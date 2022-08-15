import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm : FormGroup;
  authorsArray: FormArray;
  editedBook : Book[] | undefined
  editedBook2 : Book | undefined
  

  constructor(private fb: FormBuilder, private bookService : BookService, private router: Router) { 
    this.editedBook = this.bookService.editedBook
    
    if(this.editedBook != undefined){
    
      // this.bookForm = this.fb.group({
      //     editedBook : this.fb.array(this.editedBook.map(book => this.fb.group({
      //     name : this.fb.control(book.name),
      //     isbn : this.fb.control(book.isbn),
      //     authors: this.fb.array(book.authors)
      //   })))
      // })
      // this.authorsArray = this.bookForm.get("authors") as FormArray
    this.bookForm = this.fb.group({
      id: this.editedBook[0].id,
      name: this.editedBook[0].name,
      isbn: this.editedBook[0].isbn,
      authors: this.fb.array(this.editedBook[0].authors)
    })
      this.authorsArray = this.bookForm.get("authors") as FormArray
      this.editedBook2 = this.editedBook[0]

    }else{
      this.bookForm = this.fb.group({
        name: [''],
        isbn: [''],
        authors: this.fb.array([
  
        ])
      });
  
     
      this.authorsArray = this.bookForm.get("authors") as FormArray

    }
  }

  
  ngOnInit(): void {
  }



  submit(){
    const book = this.bookForm.value as Book
    console.log(book)
    
    if(this.bookService.addFlag && !this.bookService.editFlag){
      this.bookService.addBooks(book)
    }else if(!this.bookService.addFlag && this.bookService.editFlag){
      this.bookService.editBook(book)
    }
    this.bookForm.reset()
    this.router.navigate(["/book"])
    
  }

  addFormControl = () =>{
    this.authorsArray.push(new FormControl)
  }

  addFormCOntrol = (arr:string[]) =>{
    for(let x of arr){
      this.authorsArray.push(new FormControl)
    }
  }
}
