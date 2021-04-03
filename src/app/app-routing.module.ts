import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {BlogComponent} from './blog/blog.component';
import {CarbonComponent} from './carbon/carbon.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'article', component: ArticleComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'carbon', component: CarbonComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'test', component: TestComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
