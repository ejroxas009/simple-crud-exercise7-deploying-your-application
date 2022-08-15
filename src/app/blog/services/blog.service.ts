import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  id:number = 4
  editedBlog : Blog[] | undefined
  addFlag = false;
  editFlag = false;
  blogs : Blog[] = [
    {id : 1, 
      title: "How to make an apple juice", 
      description: "making an apple juice using a blender", 
      author: "Apple Juice Maker",
      comments:["Good work!!!", 
                "Its so easy to do", 
                "Wow!"] 
    },
    {id : 2, 
      title: "A day in a life of a software engineer", 
      description: "Watch a day in my life as a software engineer at Microsoft’s headquarters near Seattle. While I am based in Silicon Valley, I sometimes travel to the Redmond headquarters in person, and I hope you enjoy a sneak peak into all the cool stuff at the Redmond Campus. ", 
      author: "Justin Hammond",
      comments:["Commutes over Lake Washington are everything! I live for the scenery! Great vlog!",
                "True life of every software engineer ",
              "Loving the vlog man keep it up!!"
            ] 
 
    },
    {id : 3, 
      title: "Learn How To Build A Website In 1 Hour!", 
      description: "Building a website can be hard, so in this video I will walk you through building a full website in one hour. This website is based on a product that is a spin off of Spotify. The design was created by Dev Ed, and he has his own video on how to design the site linked below.", 
      author: "Web Dev Simplified",
      comments:["All I have to say is: everything I had to know you showed in this video... The foundation, the basic which are so important. Thank you so much",
                "Beautiful. Between the two of you, I learned a lot. Can't wait to put it into practice.",
              "This is just a Next Level Tutorial ! Love it! You have skills for teaching :)"] 
    },
  ];

  constructor() { }

  getBlogs(){
     return this.blogs

  }

  addBlogs(blog : Blog){
    blog.id = this.id
    this.id++
    this.blogs.push(blog)
  }
  
  editBlogForm(id : number){
    this.editedBlog = this.blogs.filter((blog:Blog) =>{
      if(blog.id === id){
        return blog
      }
    })
    return this.editedBlog
}

editBook(newBlog : Blog){
  this.blogs.map(blog =>{
   if(blog.id == newBlog.id){
     blog.title = newBlog.title;
     blog.description = newBlog.description;
     blog.author = newBlog.author;
     blog.comments = newBlog.comments;
     
   }
 })

}

deleteAll(){
  return this.blogs = []
}

delete(id : number){
  this.blogs = this.blogs.filter(blog =>{
    if(blog.id !== id){
      return blog
    }
  })
  return this.blogs
}
}
