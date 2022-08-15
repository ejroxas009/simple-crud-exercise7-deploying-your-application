import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';



@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  public blogs: Blog[] =[]
  public blogFormLink = "/blog/form"
  constructor(private blogService : BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs()
  }

  edit(blog : Blog){
    this.blogService.editBlogForm(blog.id)
    this.blogService.editFlag = true;
    this.blogService.addFlag = false;
  }
  delete(blog: Blog){
    console.log(blog.id)
    this.blogs = this.blogService.delete(blog.id)
  }

  add(){
    console.log("from blog-list")
    this.blogService.editFlag = false;
    this.blogService.addFlag = true;
  }

  deleteAll(){
    this.blogs = this.blogService.deleteAll()
  }
 
  
}
