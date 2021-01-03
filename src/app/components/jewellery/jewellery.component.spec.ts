import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JewelleryComponent } from './jewellery.component';

describe('JewelleryComponent', () => {
  let component: JewelleryComponent;
  let fixture: ComponentFixture<JewelleryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
