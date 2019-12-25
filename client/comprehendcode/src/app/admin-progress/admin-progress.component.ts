import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-admin-progress',
  templateUrl: './admin-progress.component.html',
  styleUrls: ['./admin-progress.component.css']
})
export class AdminProgressComponent implements OnInit {

  constructor(private post: PostService) { }

  ngOnInit() {
    this.post
  }

  addPost(){
    return PostService.addPost(this.post).subscribe();
  }
}
