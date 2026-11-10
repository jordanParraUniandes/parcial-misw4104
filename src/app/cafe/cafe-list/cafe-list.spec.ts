import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { CafeList } from './cafe-list';
import { Cafe } from '../cafe';

describe('CafeList', () => {
  let component: CafeList;
  let fixture: ComponentFixture<CafeList>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeList],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(CafeList);
    component = fixture.componentInstance;

    const cafes = [
      new Cafe(1, 'Café A', 'Blend', 'Región A', 'Sabor A', 1920, 'imagenA.jpg'),
      new Cafe(2, 'Café B', 'Café de Origen', 'Región B', 'Sabor B', 1800, 'imagenB.jpg'),
      new Cafe(3, 'Café C', 'Café de Origen', 'Región C', 'Sabor C', 1700, 'imagenC.jpg')
    ];

    component.cafes.set(cafes);

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 rows in the table body', () => {
    const tableBody = debug.query(By.css('tbody'));
    const rows = tableBody.queryAll(By.css('tr'));
    expect(rows).toHaveLength(3);
  });

  it('should have 1 header row in the table', () => {
    const tableHeader = debug.query(By.css('thead'));
    const headerRows = tableHeader.queryAll(By.css('tr'));
    expect(headerRows).toHaveLength(1);
  });
});