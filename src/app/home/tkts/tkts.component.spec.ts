import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TktsComponent } from './tkts.component';

describe('TktsComponent', () => {
  let component: TktsComponent;
  let fixture: ComponentFixture<TktsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TktsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TktsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
