import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftColumnGridComponent } from './left-column-grid.component';

describe('LeftColumnGridComponent', () => {
  let component: LeftColumnGridComponent;
  let fixture: ComponentFixture<LeftColumnGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftColumnGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftColumnGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
