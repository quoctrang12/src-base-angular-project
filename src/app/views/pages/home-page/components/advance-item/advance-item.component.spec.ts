import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceItemComponent } from './advance-item.component';

describe('AdvanceItemComponent', () => {
  let component: AdvanceItemComponent;
  let fixture: ComponentFixture<AdvanceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AdvanceItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
