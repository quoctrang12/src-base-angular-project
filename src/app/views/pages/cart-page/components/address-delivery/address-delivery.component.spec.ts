import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDeliveryComponent } from './address-delivery.component';

describe('AddressDeliveryComponent', () => {
  let component: AddressDeliveryComponent;
  let fixture: ComponentFixture<AddressDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
