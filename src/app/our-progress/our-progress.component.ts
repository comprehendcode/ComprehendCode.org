import { Component, OnInit } from '@angular/core';
import { butterService } from '../services/butterCMS.service';

@Component({
  selector: 'app-our-progress',
  templateUrl: './our-progress.component.html',
  styleUrls: ['./our-progress.component.css']
})
export class OurProgressComponent implements OnInit {
  public postArray: any[];
  constructor() { }

  ngOnInit() {
    // Place this into a try case and if it fails display a error message
    this.fetchPosts();
  }

  private fetchPosts() {
    butterService.content.retrieve(['our-progress'])
      .then(function(resp){
        this.postArray = resp.data;
      }).catch((resp) => {
        console.log(resp);
      });
  }
}
