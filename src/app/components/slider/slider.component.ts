import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NewsModal } from 'src/app/models/news.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class SliderComponent {
  news: NewsModal[] = [];

  constructor(config: NgbCarouselConfig,
    private dataService: DataService) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  async ngOnInit() {
    await this.dataService.getAllNews("").then((resp: any) => {
      this.news = resp.articles.slice(0, 3);
    });
  }
}
