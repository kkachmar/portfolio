import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBookletComponent } from './type-booklet.component';

describe('TypeBookletComponent', () => {
  let component: TypeBookletComponent;
  let fixture: ComponentFixture<TypeBookletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeBookletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBookletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
