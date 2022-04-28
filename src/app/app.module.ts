import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsletterComponent } from './home/foo/bar/baz/newsletter/newsletter.component';
import { FooComponent } from './home/foo/foo.component';
import { BarComponent } from './home/foo/bar/bar.component';
import { BazComponent } from './home/foo/bar/baz/baz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsletterComponent,
    FooComponent,
    BarComponent,
    BazComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
