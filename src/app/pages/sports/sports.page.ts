import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NewsModal } from 'src/app/models/news.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss']
})
export class SportsPage implements OnInit {

  data: NewsModal[] = [];
  filter: string = "";
  category = "sports";

  loading = true;

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef


  ) { }

  async ngOnInit() {


    await this.dataService.getCategoryNews(this.category, this.filter).then((resp: any) => {
      this.data = resp.articles;
      this.loading = false;
    });

  }

  async filterNews() {
    this.loading = true;
    await this.dataService.getCategoryNews(this.category, this.filter).then((resp: any) => {
      this.data = resp.articles;
      this.loading = false;
    });
  }
}
