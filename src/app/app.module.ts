import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsfeedComponent } from './pages/newsfeed/newsfeed.component';
import { MainComponent } from './pages/main/main.component';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { MessageRightBarComponent } from './components/message-right-bar/message-right-bar.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { LeftColumnGridComponent } from './components/left-column-grid/left-column-grid.component';
import { QuickPostComponent } from './components/quick-post/quick-post.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsfeedWidgetComponent } from './components/newsfeed-widget/newsfeed-widget.component';
import { NewsfeedPopupPicComponent } from './components/newsfeed-popup-pic/newsfeed-popup-pic.component';
import { NewsfeedReactionComponent } from './components/newsfeed-reaction/newsfeed-reaction.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent,
    MainComponent,
    PageLoaderComponent,
    LeftBarComponent,
    MessageRightBarComponent,
    HeaderBarComponent,
    LeftColumnGridComponent,
    QuickPostComponent,
    NewsfeedWidgetComponent,
    NewsfeedPopupPicComponent,
    NewsfeedReactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
