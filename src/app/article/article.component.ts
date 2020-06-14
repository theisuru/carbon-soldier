import {Component, OnInit} from '@angular/core';
import {Article} from '../article';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    this.articleService.getArticle().subscribe(article => this.article = article);
  }
}
