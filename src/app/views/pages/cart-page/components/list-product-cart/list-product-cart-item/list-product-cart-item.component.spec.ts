import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductCartItemComponent } from './list-product-cart-item.component';

describe('ListProductCartItemComponent', () => {
  let component: ListProductCartItemComponent;
  let fixture: ComponentFixture<ListProductCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductCartItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
