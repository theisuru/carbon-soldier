import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ArticleComponent} from './article/article.component';
import {AppRoutingModule} from './app-routing.module';
import {CarbonComponent} from './carbon/carbon.component';
import {BlogComponent} from './blog/blog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {TestComponent} from './test/test.component';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CarbonComponent,
    BlogComponent,
    AboutComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule, MatMenuModule, MatButtonModule, MatTabsModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
