import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourOrdersPageComponent } from './your-orders-page.component';

describe('YourOrdersPageComponent', () => {
  let component: YourOrdersPageComponent;
  let fixture: ComponentFixture<YourOrdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ YourOrdersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
