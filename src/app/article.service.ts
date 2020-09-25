import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from './article';
import {MOCK_ARTICLE_INDEX} from './mock-article';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articleIndex: Map<string, Article>;

  constructor(private http: HttpClient) {
  }

  getArticleById(id): Observable<Article> {
    const mockArticle = MOCK_ARTICLE_INDEX[id];
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const article = {title: mockArticle.title, category: mockArticle.category, date: mockArticle.date, id, body: ''};
    this.http.get(mockArticle.body, {headers, responseType: 'text'}).subscribe(data => article.body = data);
    return of(article);
  }

  getArticleList(): Observable<Article[]> {
    const articles = Object.values(MOCK_ARTICLE_INDEX);
    return of(articles);
  }

  getFeaturedArticleId(): string {
    const featuredArticleId = '7_habits';
    return featuredArticleId;
  }

}
