import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafTortaComponent } from './graf-torta.component';

describe('GrafTortaComponent', () => {
  let component: GrafTortaComponent;
  let fixture: ComponentFixture<GrafTortaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafTortaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafTortaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
