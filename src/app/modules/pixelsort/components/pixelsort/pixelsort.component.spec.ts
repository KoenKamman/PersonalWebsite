import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelsortComponent } from './pixelsort.component';

describe('PixelsortComponent', () => {
  let component: PixelsortComponent;
  let fixture: ComponentFixture<PixelsortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelsortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
