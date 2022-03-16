import { LayoutConfig } from '@spartacus/storefront';

export const myLayoutConfig: LayoutConfig = {
  layoutSlots: {
    TopHeaderSection: {
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
    BottomNavSection: {
      lg: {
        slots: [],
      },
      slots: ['BottomNav'],
    },
  },
};
