import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LiquorsComponent } from './liquors.component';

describe('LiquorsComponent', () => {
  let component: LiquorsComponent;
  let fixture: ComponentFixture<LiquorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
