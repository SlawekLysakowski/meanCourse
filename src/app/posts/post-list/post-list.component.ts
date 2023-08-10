import { Component, Input } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  // posts = [
  //   { title: 'First post', content: 'This is the first posts content' },
  //   { title: 'Second post', content: 'This is the Second posts content' },
  //   { title: 'Third post', content: 'This is the Third posts content' },
  // ];

  @Input() posts: Post[] = [];
}
