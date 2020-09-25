import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticleList().subscribe(data => this.articles = data);
  }

}
