import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  constructor(public postaService: PostsService) {}

  posts: Post[] = [];
  private postsSub: Subscription;

  ngOnInit() {
    this.posts = this.postaService.getPosts();
    this.postsSub = this.postaService
      .getPostpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  // posts = [
  //   { title: 'First post', content: 'This is the first posts content' },
  //   { title: 'Second post', content: 'This is the Second posts content' },
  //   { title: 'Third post', content: 'This is the Third posts content' },
  // ];
}
