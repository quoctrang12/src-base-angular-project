import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSearchProductsComponent } from './hot-search-products.component';

describe('HotSearchProductsComponent', () => {
  let component: HotSearchProductsComponent;
  let fixture: ComponentFixture<HotSearchProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HotSearchProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotSearchProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
