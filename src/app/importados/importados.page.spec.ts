import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportadosPage } from './importados.page';

describe('ImportadosPage', () => {
  let component: ImportadosPage;
  let fixture: ComponentFixture<ImportadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
