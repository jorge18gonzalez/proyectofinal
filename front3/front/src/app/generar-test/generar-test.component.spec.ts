import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarTestComponent } from './generar-test.component';

describe('GenerarTestComponent', () => {
  let component: GenerarTestComponent;
  let fixture: ComponentFixture<GenerarTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
