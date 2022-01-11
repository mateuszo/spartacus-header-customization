import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageSlotModule, SearchBoxModule } from '@spartacus/storefront';
import { MyHeaderComponent } from './my-header.component';

@NgModule({
  imports: [CommonModule, RouterModule, SearchBoxModule, PageSlotModule],
  declarations: [MyHeaderComponent],
  exports: [MyHeaderComponent],
})
export class MyHeaderModule {}
