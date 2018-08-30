import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graficos1Component } from './graficos1.component';

describe('Graficos1Component', () => {
  let component: Graficos1Component;
  let fixture: ComponentFixture<Graficos1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graficos1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graficos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
