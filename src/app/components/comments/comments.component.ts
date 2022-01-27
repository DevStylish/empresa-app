import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  idComentarioPost: any;
  comentariosPost: any []= [];

  constructor(private postService: PostsService, private route: ActivatedRoute) { 
    route.paramMap.subscribe(params =>{
      this.idComentarioPost = params.get('id');
      postService.getComments(this.idComentarioPost).subscribe( (data :any) =>{
          this.comentariosPost.push(data);
      })
    });
  }

  ngOnInit(): void {}

}
