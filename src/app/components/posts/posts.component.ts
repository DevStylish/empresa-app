import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any [] = [];

  constructor(private postService: PostsService, private router : Router) { 
      this.postService.getPosts().subscribe( (data: any) => {
        this.posts = data;
      });
  }

  mostrarDetallePost(id : number){
    this.router.navigate(['comments',id]);
  }

  ngOnInit(): void {}

}
