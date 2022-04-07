import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../common/article';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private baseUrl = 'http:localhost:3000';

  constructor(private httpCLient: HttpClient) {}

  getArticleList(): Observable<Article[]> {
    return this.httpCLient
      .get<GetResponse>(this.baseUrl)
      .pipe(map((response) => response.articles));
  }
}

interface GetResponse {
  articles: Article[];
}
