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
import { MyHeaderComponent } from './my-header.component';

@NgModule({
  imports: [
    CommonModule,
    GenericLinkModule,
    SearchBoxModule,
    PageSlotModule,
    MiniCartModule,
    IconModule,
    UrlModule,
  ],
  declarations: [MyHeaderComponent],
  exports: [MyHeaderComponent],
})
export class MyHeaderModule {}
