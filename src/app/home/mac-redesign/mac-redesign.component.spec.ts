import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacRedesignComponent } from './mac-redesign.component';

describe('MacRedesignComponent', () => {
  let component: MacRedesignComponent;
  let fixture: ComponentFixture<MacRedesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacRedesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacRedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
