import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedPopupPicComponent } from './newsfeed-popup-pic.component';

describe('NewsfeedPopupPicComponent', () => {
  let component: NewsfeedPopupPicComponent;
  let fixture: ComponentFixture<NewsfeedPopupPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedPopupPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedPopupPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
