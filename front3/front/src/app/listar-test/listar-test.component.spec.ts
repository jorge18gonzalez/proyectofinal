import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTestComponent } from './listar-test.component';

describe('ListarTestComponent', () => {
  let component: ListarTestComponent;
  let fixture: ComponentFixture<ListarTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
