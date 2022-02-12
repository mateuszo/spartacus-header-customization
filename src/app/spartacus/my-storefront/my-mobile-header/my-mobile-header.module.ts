import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UrlModule } from '@spartacus/core';
import {
  GenericLinkModule,
  HamburgerMenuModule,
  IconModule,
  PageSlotModule,
} from '@spartacus/storefront';
import { MyMobileHeaderComponent } from './my-mobile-header.component';

@NgModule({
  imports: [
    CommonModule,
    GenericLinkModule,
    PageSlotModule,
    IconModule,
    UrlModule,
    HamburgerMenuModule,
  ],
  declarations: [MyMobileHeaderComponent],
  exports: [MyMobileHeaderComponent],
})
export class MyMobileHeaderModule {}
