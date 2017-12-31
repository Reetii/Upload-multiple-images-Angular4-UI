import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routes';


import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

import { UploadService } from './services/upload/upload.service';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FeedbackComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
