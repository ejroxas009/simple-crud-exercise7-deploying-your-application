import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  blogForm: FormGroup;
  commentsArray : FormArray
  editedBlog : Blog[] | undefined
  constructor(private fb:FormBuilder, private blogService: BlogService, private router : Router) {
    // this.blogForm = this.fb.group({
    //   title: [''],
    //   description: [''],
    //   author: [''],
    //   comments: this.fb.array([])
    // })

    // this.commentsArray = this.blogForm.get("comments") as FormArray

    this.editedBlog = this.blogService.editedBlog!
    if(this.editedBlog != undefined){
    
      // this.bookForm = this.fb.group({
      //     editedBook : this.fb.array(this.editedBook.map(book => this.fb.group({
      //     name : this.fb.control(book.name),
      //     isbn : this.fb.control(book.isbn),
      //     authors: this.fb.array(book.authors)
      //   })))
      // })
      // this.authorsArray = this.bookForm.get("authors") as FormArray
    this.blogForm = this.fb.group({
      id: this.editedBlog[0].id,
      title: this.editedBlog[0].title,
      description: this.editedBlog[0].description,
      author: this.editedBlog[0].author,
      comments : this.fb.array(this.editedBlog[0].comments)
    })
      this.commentsArray = this.blogForm.get("comments") as FormArray

    }else{
     this.blogForm = this.fb.group({
      title: [''],
      description: [''],
      author: [''],
      comments: this.fb.array([])
    })

    this.commentsArray = this.blogForm.get("comments") as FormArray

    }

   }

  ngOnInit(): void {
  }

  submit(){
    const blog = this.blogForm.value as Blog
    console.log(blog)
    

    if(this.blogService.addFlag && !this.blogService.editFlag){
      this.blogService.addBlogs(blog).subscribe()
    }else if(!this.blogService.addFlag && this.blogService.editFlag){
      this.blogService.editBook(blog).subscribe()
    }

    this.blogForm.reset()
    this.router.navigate(["/blog"])
    
  }

  addFormControl = () =>{
    this.commentsArray.push(new FormControl)
  }

}
