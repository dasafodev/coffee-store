import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Coffee } from './coffee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  coffeeList: Coffee[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getStock().subscribe((data: Coffee[]) => {
      this.coffeeList = data;
    });
  }
}
