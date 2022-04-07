import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Article } from '../common/article';
import { map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private baseUrl = 'http://localhost:3000/article';

  constructor(private httpCLient: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getArticleList(): Observable<Article[]> {
    return this.httpCLient.get<[]>(this.baseUrl).pipe(
      map((res) => res),
      catchError(this.handleError)
    );
  }

  addArticle(article: Article): Observable<Article> {
    return this.httpCLient.post<Article>(this.baseUrl, article).pipe(catchError(this.handleError));
  }
}
