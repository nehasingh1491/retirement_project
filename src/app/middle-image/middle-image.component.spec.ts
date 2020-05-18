import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleImageComponent } from './middle-image.component';

describe('MiddleImageComponent', () => {
  let component: MiddleImageComponent;
  let fixture: ComponentFixture<MiddleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
