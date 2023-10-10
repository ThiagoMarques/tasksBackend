import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPricingComponent } from './card-pricing.component';

describe('CardPricingComponent', () => {
  let component: CardPricingComponent;
  let fixture: ComponentFixture<CardPricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardPricingComponent]
    });
    fixture = TestBed.createComponent(CardPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
