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
import {MatButtonModule, MatMenuModule, MatSliderModule} from '@angular/material';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {CommonModule} from '@angular/common';
import { TestComponent } from './test/test.component';

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
        MatSliderModule, MatMenuModule, MatButtonModule, MatTabsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
