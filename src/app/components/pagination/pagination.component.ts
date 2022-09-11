import { Component, Input, OnInit } from '@angular/core';
import { NewsModal } from 'src/app/models/news.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'pagination-comp',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']

})
export class PaginationComponent implements OnInit {
  @Input() data: NewsModal[] = [];
  // data: NewsModal[] = [];
  pageSize = 3;
  page = 1;

  constructor(
    private dataService: DataService

  ) { }

  async ngOnInit() {
    // this.data = this.dataService.dataNews;

  }



}
