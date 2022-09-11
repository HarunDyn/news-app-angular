import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NewsModal } from 'src/app/models/news.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'technology',
  templateUrl: './technology.page.html',
  styleUrls: ['./technology.page.scss']
})
export class TechnologyPage implements OnInit {

  data: NewsModal[] = [];
  filter: string = "";
  category = "technology";

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
