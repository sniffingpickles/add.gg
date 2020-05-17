import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedWidgetComponent } from './newsfeed-widget.component';

describe('NewsfeedWidgetComponent', () => {
  let component: NewsfeedWidgetComponent;
  let fixture: ComponentFixture<NewsfeedWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
