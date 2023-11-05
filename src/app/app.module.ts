import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoffeeListModule } from './coffee-list/coffee-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoffeeListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
