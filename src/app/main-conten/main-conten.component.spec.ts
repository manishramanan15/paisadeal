import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContenComponent } from './main-conten.component';

describe('MainContenComponent', () => {
  let component: MainContenComponent;
  let fixture: ComponentFixture<MainContenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
