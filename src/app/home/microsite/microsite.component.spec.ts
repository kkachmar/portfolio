import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrositeComponent } from './microsite.component';

describe('MicrositeComponent', () => {
  let component: MicrositeComponent;
  let fixture: ComponentFixture<MicrositeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrositeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
