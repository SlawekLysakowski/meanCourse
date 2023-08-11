import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  constructor(public postaService: PostsService) {}
  enteredTitle = '';
  enteredContent = '';

  onAddPost(form: NgForm) {
    if (form.invalid) return;

    this.postaService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}