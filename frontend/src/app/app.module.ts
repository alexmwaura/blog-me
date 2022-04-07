import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [AppComponent, ArticleListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ArticleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
