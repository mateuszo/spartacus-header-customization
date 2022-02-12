import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UrlModule } from '@spartacus/core';
import {
  GenericLinkModule,
  IconModule,
  MiniCartModule,
  PageSlotModule,
  SearchBoxModule,
} from '@spartacus/storefront';
import { MyDesktopHeaderComponent } from './my-desktop-header.component';

@NgModule({
  imports: [
    CommonModule,
    GenericLinkModule,
    PageSlotModule,
    SearchBoxModule,
    IconModule,
    MiniCartModule,
    UrlModule,
  ],
  declarations: [MyDesktopHeaderComponent],
  exports: [MyDesktopHeaderComponent],
})
export class MyDesktopHeaderModule {}
