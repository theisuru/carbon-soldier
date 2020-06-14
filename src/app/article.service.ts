import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from './article';
import {MOCK_ARTICLE} from './mock-article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() {
  }

  getArticle(): Observable<Article> {
    return of(MOCK_ARTICLE);
  }
}
