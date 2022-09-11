import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'navbar-comp',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  search: string = '';

  currentSection: string = "";

  constructor(
    private dataService: DataService,
    private route: Router,
    private Location: Location

  ) {
    this.currentSection = this.Location.path().slice(1);

  }

  ngOnInit() {
    console.log(this.currentSection)

  }
  async searchNews() {
    await this.dataService.getAllNews(this.search);
    this.route.navigate(['/search']);

  }
}
