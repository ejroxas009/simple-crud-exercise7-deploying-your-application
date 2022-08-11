import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book';




@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  public title = "title"
 @Input() book : Book | undefined
 @Output() editActionEmitter = new EventEmitter<Book>()
 @Output() deleteActionEmitter = new EventEmitter<Book>()
  constructor() { }

  ngOnInit(): void {
    
  }

edit(){
  this.editActionEmitter.emit(this.book)
}

delete(){
  this.deleteActionEmitter.emit(this.book)
}


}
