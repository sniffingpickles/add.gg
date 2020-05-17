import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedReactionComponent } from './newsfeed-reaction.component';

describe('NewsfeedReactionComponent', () => {
  let component: NewsfeedReactionComponent;
  let fixture: ComponentFixture<NewsfeedReactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedReactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedReactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
