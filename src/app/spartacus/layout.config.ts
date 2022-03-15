import { LayoutConfig } from '@spartacus/storefront';

export const myLayoutConfig: LayoutConfig = {
  layoutSlots: {
    topHeader: {
      lg: {
        slots: ['SiteLinks', 'SiteContext'],
      },
      slots: ['SiteLinks', 'SiteLogo', 'SiteContext'],
    },
    header: {
      lg: {
        slots: [
          'SiteLogo',
          'NavigationBar',
          'SearchBox',
          'SiteLogin',
          'WishlistIcon',
          'MiniCart',
        ],
      },
      slots: [],
    },
  },
};
