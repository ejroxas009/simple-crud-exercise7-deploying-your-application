import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
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
  constructor(private blogService : BlogService, private router : Router) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe( data => this.blogs = data)
  }

  edit(blog : Blog){
    this.blogService.editBlogForm(blog.id, this.blogs)
    this.blogService.editFlag = true;
    this.blogService.addFlag = false;
  }
  delete(blog: Blog){
    console.log(blog.id)
    let res1 = this.blogService.delete(blog)
    let res2 = this.blogService.getBlogs()
    forkJoin([res1,res2]).subscribe( data => this.blogs = data[1])
  }

  add(){
    console.log("from blog-list")
    this.blogService.editFlag = false;
    this.blogService.addFlag = true;
  }

  deleteAll(){
    for(let blog of this.blogs){
      this.delete(blog)
    }
  }
 
  logout(){
    localStorage.removeItem('token')
    console.log('logged out')
    this.router.navigate(['login'])
  }
}
