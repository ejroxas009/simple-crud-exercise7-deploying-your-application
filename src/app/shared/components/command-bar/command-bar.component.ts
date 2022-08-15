import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/book/models/book';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {
  
  @Output() addActionEmitter = new EventEmitter()
  @Output() deleteAllActionEmitter = new EventEmitter()
  @Input()  variableLink : string | undefined
  
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.addActionEmitter.emit()
    console.log("from command bar")
  }

  deleteAll(){
    this.deleteAllActionEmitter.emit()
  }
}
