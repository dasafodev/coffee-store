import { Component } from '@angular/core';
import { Coffee } from './coffee';
import { CoffeeListService } from './coffee-list.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
})
export class CoffeeListComponent {
  coffeeList: Coffee[] = [];

  constructor(private coffeeListService: CoffeeListService) {}

  ngOnInit() {
    this.coffeeListService.getStock().subscribe((data: Coffee[]) => {
      this.coffeeList = data;
    });
  }
}
