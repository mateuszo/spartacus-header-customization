import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig, UrlModule } from '@spartacus/core';
import {
  GenericLinkModule,
  HamburgerMenuModule,
  IconModule,
  PageSlotModule,
  provideCmsStructure,
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
  providers: [
    provideConfig({
      cmsComponents: {
        MobileHeader: {
          component: MyMobileHeaderComponent,
        },
      },
    } as CmsConfig),
    provideCmsStructure({
      pageSlotPosition: 'BottomNav',
      componentId: 'MobileHeader',
    }),
  ],
})
export class MyMobileHeaderModule {}
