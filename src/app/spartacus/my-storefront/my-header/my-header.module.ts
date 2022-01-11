import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IconModule,
  MiniCartModule,
  PageSlotModule,
  SearchBoxModule,
} from '@spartacus/storefront';
import { MyHeaderComponent } from './my-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SearchBoxModule,
    PageSlotModule,
    MiniCartModule,
    IconModule,
  ],
  declarations: [MyHeaderComponent],
  exports: [MyHeaderComponent],
})
export class MyHeaderModule {}
