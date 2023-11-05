// coffee-list.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Coffee } from './coffee';
import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeListService } from './coffee-list.service';

// Crea un mock del servicio
class MockCoffeeListService {
  getStock(): Observable<Coffee[]> {
    return of([
      {
        id: 1,
        nombre: 'Café A',
        tipo: 'Café de Origen',
        region: 'Región A',
        sabor: 'Sabor A',
        altura: 1000,
        imagen: 'image-a.jpg',
      },
      {
        id: 2,
        nombre: 'Café B',
        tipo: 'Blend',
        region: 'Región B',
        sabor: 'Sabor B',
        altura: 1100,
        imagen: 'image-b.jpg',
      },
      {
        id: 3,
        nombre: 'Café C',
        tipo: 'Café de Origen',
        region: 'Región C',
        sabor: 'Sabor C',
        altura: 1200,
        imagen: 'image-c.jpg',
      },
    ]);
  }
}

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeeListComponent],
      providers: [
        { provide: CoffeeListService, useClass: MockCoffeeListService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deben existir 3 filas para los cafes creados mas 1 fila para el header', () => {
    fixture.detectChanges();
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(4);
  });
});
