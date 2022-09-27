import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesIniciaisComponent } from './testes-iniciais.component';

describe('TestesIniciaisComponent', () => {
  let component: TestesIniciaisComponent;
  let fixture: ComponentFixture<TestesIniciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestesIniciaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestesIniciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
