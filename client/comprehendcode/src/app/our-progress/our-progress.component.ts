import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-our-progress',
  templateUrl: './our-progress.component.html',
  styleUrls: ['./our-progress.component.css']
})
export class OurProgressComponent implements OnInit {

  constructor(private post: PostService) { }
  public postArray;
  ngOnInit() {
    // Place this into a try case and if it fails display a error message
    this.getPosts();
  }

  getPosts(){
    return this.post.getPosts().subscribe((post)=>{
      this.postArray = post;
    }, (err)=>{
      console.log(err);
      throw err;
    })
  }
}
