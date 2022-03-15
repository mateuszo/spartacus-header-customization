import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  GlobalMessageComponentModule,
  KeyboardFocusModule,
  OutletModule,
  OutletRefModule,
  PageLayoutModule,
  PageSlotModule,
  SkipLinkModule,
} from '@spartacus/storefront';
import { MyStorefrontComponent } from './my-storefront.component';

@NgModule({
  declarations: [MyStorefrontComponent],
  imports: [
    CommonModule,
    RouterModule,
    GlobalMessageComponentModule,
    OutletModule,
    OutletRefModule,
    PageLayoutModule,
    PageSlotModule,
    KeyboardFocusModule,
    SkipLinkModule,
  ],
  exports: [MyStorefrontComponent],
})
export class MyStorefrontModule {}
