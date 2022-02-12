import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyDesktopHeaderModule } from '../my-desktop-header/my-desktop-header.module';
import { MyMobileHeaderModule } from '../my-mobile-header/my-mobile-header.module';
import { MyHeaderComponent } from './my-header.component';

@NgModule({
  imports: [CommonModule, MyDesktopHeaderModule, MyMobileHeaderModule],
  declarations: [MyHeaderComponent],
  exports: [MyHeaderComponent],
})
export class MyHeaderModule {}
