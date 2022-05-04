import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongformArticleComponent } from './longform-article.component';

describe('LongformArticleComponent', () => {
  let component: LongformArticleComponent;
  let fixture: ComponentFixture<LongformArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongformArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongformArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
