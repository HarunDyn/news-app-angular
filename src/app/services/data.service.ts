import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewsModal } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public dataNews = new BehaviorSubject([]);
  public query = new BehaviorSubject("");

  constructor(
    private http: HttpClient,
  ) { }


  getAllNews(query?: string) {
    let queryUrl = "";
    // query == "" ? queryUrl = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971` : queryUrl = `https://newsapi.org/v2/top-headlines?country=tr&q=${query}&apiKey=676f017549224f488970f1835f9db971`;
    query == "" ? queryUrl = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=a4cb28df18c84072b6b437bf2121c636` : queryUrl = `https://newsapi.org/v2/top-headlines?country=tr&q=${query}&apiKey=a4cb28df18c84072b6b437bf2121c636`;
    console.log(queryUrl);
    return new Promise((resolve, reject) => {
      this.http.get(queryUrl).subscribe({
        next: (resp: any) => {
          this.dataNews.next(resp.articles);
          query ? this.query.next(query) : null;
          resolve(resp);
        },
        error: err => {
          reject(err);
        }
      });
    });
  }

  getCategoryNews(category: string, filter?: string) {
    let queryUrl = "";
    // filter == "" ? queryUrl = `https://newsapi.org/v2/top-headlines?country=tr&category=${category}&apiKey=676f017549224f488970f1835f9db971` : queryUrl = `https://newsapi.org/v2/top-headlines?country=tr&category=${category}&q=${filter}&apiKey=676f017549224f488970f1835f9db971`;
    filter == "" ? queryUrl = `https://newsapi.org/v2/top-headlines?country=tr&category=${category}&apiKey=a4cb28df18c84072b6b437bf2121c636` : queryUrl = `https://newsapi.org/v2/top-headlines?country=tr&category=${category}&q=${filter}&apiKey=a4cb28df18c84072b6b437bf2121c636`;

    return new Promise((resolve, reject) => {
      this.http.get(queryUrl).subscribe({
        next: (resp: any) => {
          resolve(resp);
        },
        error: err => {
          reject(err);
        }
      });
    });
  }



}
