import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductCardComponent } from './shop-product-card.component';

describe('ShopProductCardComponent', () => {
  let component: ShopProductCardComponent;
  let fixture: ComponentFixture<ShopProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
