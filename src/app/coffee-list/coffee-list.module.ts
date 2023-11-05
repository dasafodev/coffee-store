import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeListService } from './coffee-list.service';

@NgModule({
  declarations: [CoffeeListComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [CoffeeListService],
  exports: [CoffeeListComponent],
})
export class CoffeeListModule {}
