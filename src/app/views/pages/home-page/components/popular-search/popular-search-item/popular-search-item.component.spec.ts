import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSearchItemComponent } from './popular-search-item.component';

describe('PopularSearchItemComponent', () => {
  let component: PopularSearchItemComponent;
  let fixture: ComponentFixture<PopularSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PopularSearchItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
