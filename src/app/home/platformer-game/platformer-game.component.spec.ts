import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformerGameComponent } from './platformer-game.component';

describe('PlatformerGameComponent', () => {
  let component: PlatformerGameComponent;
  let fixture: ComponentFixture<PlatformerGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformerGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
