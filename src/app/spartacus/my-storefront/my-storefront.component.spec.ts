import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStorefrontComponent } from './my-storefront.component';

describe('MyStorefrontComponent', () => {
  let component: MyStorefrontComponent;
  let fixture: ComponentFixture<MyStorefrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyStorefrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStorefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
