import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NewsModal } from 'src/app/models/news.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss']
})
export class AboutMePage implements OnInit {



  loading = true;

  constructor(



  ) { }

  async ngOnInit() {




  }


}
