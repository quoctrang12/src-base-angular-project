import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoryItemComponent } from './list-category-item.component';

describe('ListCategoryItemComponent', () => {
  let component: ListCategoryItemComponent;
  let fixture: ComponentFixture<ListCategoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ListCategoryItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
