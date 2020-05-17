import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRightBarComponent } from './message-right-bar.component';

describe('MessageRightBarComponent', () => {
  let component: MessageRightBarComponent;
  let fixture: ComponentFixture<MessageRightBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageRightBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRightBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
