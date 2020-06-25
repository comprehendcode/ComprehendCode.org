import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { butterService } from '../services/butterCMS.service';
import { concat } from 'rxjs';
@Component({
  selector: 'app-our-stories-detail',
  templateUrl: './our-stories-detail.component.html',
  styleUrls: ['./our-stories-detail.component.css']
})
export class OurStoriesDetailComponent implements OnInit {
  private slug: any;
  public story = {
    meta: null,
    data: null
  };
  constructor(private router: Router, private Activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.Activatedroute.paramMap.subscribe(params => {
      this.slug = params.get('slug')
    });
    this.fetchPost(this.slug);

  }

  private fetchPost(slug) {
    butterService.post.retrieve(slug)
      .then((res)=>{
          console.log(res.data);
          this.story = res.data;
      }).catch((res)=>{
        console.log(res);
      });
  }
}
