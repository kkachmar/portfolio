import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetBuddyComponent } from './budget-buddy.component';

describe('BudgetBuddyComponent', () => {
  let component: BudgetBuddyComponent;
  let fixture: ComponentFixture<BudgetBuddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetBuddyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
