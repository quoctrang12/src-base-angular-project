import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentMethodComponent } from './shipment-method.component';

describe('ShipmentMethodComponent', () => {
  let component: ShipmentMethodComponent;
  let fixture: ComponentFixture<ShipmentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
