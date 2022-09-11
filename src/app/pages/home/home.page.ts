import { Component, Input, OnInit } from '@angular/core';
import { NewsModal } from 'src/app/models/news.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  allNews: NewsModal[] = [];
  trendingTopics: NewsModal[] = [];
  EditorsPick: NewsModal[] = [];

  loading = true;


  constructor(
    private dataService: DataService

  ) { }

  async ngOnInit() {
    await this.dataService.getAllNews("").then((resp: any) => {
      this.allNews = resp.articles;
      this.trendingTopics = this.allNews.slice(0, 4);
      this.EditorsPick = this.allNews.slice(4, 8);
      this.loading = false;
    });
  }
}
