import { Component, OnInit } from '@angular/core';
import {butterService} from '../services';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  protected rss;
  protected atom;
  protected sitemap;
  constructor() { }

  ngOnInit() {
    butterService.feed.retrieve('rss').then((res) => {
      console.log(res.data.data);
      this.rss = res.data.data;
    });

    butterService.feed.retrieve('atom').then((res) => {
      console.log(res.data.data);
      this.atom = res.data.data;
    });

    butterService.feed.retrieve('sitemap').then((res) => {
      console.log(res.data.data);
      this.sitemap = res.data.data;
    });
  }

}
