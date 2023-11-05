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
  numCafeDeOrigen: number = 0;
  numCafeBlend: number = 0;

  constructor(private coffeeListService: CoffeeListService) {}

  ngOnInit() {
    this.coffeeListService.getStock().subscribe((data: Coffee[]) => {
      this.coffeeList = data;
      this.calculateCoffeeTypes();
    });
  }

  calculateCoffeeTypes() {
    this.numCafeDeOrigen = this.coffeeList.filter(
      (coffee) => coffee.tipo === 'Café de Origen'
    ).length;
    this.numCafeBlend = this.coffeeList.filter(
      (coffee) => coffee.tipo === 'Blend'
    ).length;
  }
}
