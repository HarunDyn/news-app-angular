import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsModal } from 'src/app/models/news.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit {

  sub!: Subscription;
  sub1!: Subscription;
  data: NewsModal[] = [];
  search: string = '';

  loading = true;

  constructor(
    public dataService: DataService,


  ) { }

  ngOnInit() {
    this.sub = this.dataService.dataNews.subscribe((data: NewsModal[]) => {
      this.data = data;
      this.loading = false;
    });

    this.sub1 = this.dataService.query.subscribe((data: string) => {
      this.search = data;
    });



  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
  }


}
