import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { SearchComponent } from './app/search/search.component';
import { DisplayComponent } from './app/display/display.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, DisplayComponent, SearchComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
