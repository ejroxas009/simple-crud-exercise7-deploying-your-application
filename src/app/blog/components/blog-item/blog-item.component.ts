import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input() blog:Blog| undefined
  @Output() editActionEmitter = new EventEmitter<Blog>()
  @Output() deleteActionEmitter = new EventEmitter<Blog>()
  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.editActionEmitter.emit(this.blog)
  }

  delete(){
    this.deleteActionEmitter.emit(this.blog)
  }
}
