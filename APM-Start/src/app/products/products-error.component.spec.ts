import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsErrorComponent } from './products-error.component';

describe('ProductsErrorComponent', () => {
  let component: ProductsErrorComponent;
  let fixture: ComponentFixture<ProductsErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
