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
import { MyHeaderModule } from './my-header/my-header.module';
import { MyStorefrontComponent } from './my-storefront.component';

@NgModule({
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
    MyHeaderModule,
  ],
  declarations: [MyStorefrontComponent],
  exports: [MyStorefrontComponent],
})
export class MyStorefrontModule {}
