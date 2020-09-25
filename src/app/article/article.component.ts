import {Component, OnInit} from '@angular/core';
import {Article} from '../article';
import {ArticleService} from '../article.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let articleId = params.id;
      if (articleId == null) {
        articleId = this.articleService.getFeaturedArticleId();
      }
      this.getArticle(articleId);
    });
  }

  private getArticle(articleId: string): void {
    this.articleService.getArticleById(articleId).subscribe(data => this.article = data);
  }
}
