import { Component, OnInit } from '@angular/core';
import { butterService } from '../services/butterCMS.service';
@Component({
  selector: 'app-our-stories',
  templateUrl: './our-stories.component.html',
  styleUrls: ['./our-stories.component.css']
})
export class OurStoriesComponent implements OnInit {
  public storyArray = [];
  constructor() { }

  ngOnInit() {
    this.fetchStories();
  }
  private fetchStories(){
    butterService.post.list({})
      .then((res)=>{
        console.log(res.data.data);
        this.storyArray = res.data.data;
      });
  }
}
