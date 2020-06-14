import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {BlogComponent} from './blog/blog.component';
import {CarbonComponent} from './carbon/carbon.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'article', component: ArticleComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'carbon', component: CarbonComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
