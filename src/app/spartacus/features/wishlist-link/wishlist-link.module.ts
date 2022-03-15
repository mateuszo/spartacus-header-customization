import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { IconModule, provideCmsStructure } from '@spartacus/storefront';
import { WishlistLinkComponent } from './wishlist-link.component';

@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [WishlistLinkComponent],
  providers: [
    provideConfig({
      cmsComponents: {
        WishlistLink: {
          component: WishlistLinkComponent,
        },
      },
    } as CmsConfig),
    provideCmsStructure({
      pageSlotPosition: 'WishlistIcon',
      componentId: 'WishlistLink',
    }),
  ],
})
export class WishlistLinkModule {}
