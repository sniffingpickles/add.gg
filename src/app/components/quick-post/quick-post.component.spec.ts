import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPostComponent } from './quick-post.component';

describe('QuickPostComponent', () => {
  let component: QuickPostComponent;
  let fixture: ComponentFixture<QuickPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
