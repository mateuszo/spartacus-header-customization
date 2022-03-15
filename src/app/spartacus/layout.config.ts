import { LayoutConfig } from '@spartacus/storefront';

export const myLayoutConfig: LayoutConfig = {
  layoutSlots: {
    topHeader: {
      slots: ['SiteLinks', 'SiteContext'],
    },
    header: {
      lg: {
        slots: [
          'SiteLogo',
          'NavigationBar',
          'SearchBox',
          'SiteLogin',
          'MiniCart',
        ],
      },
      slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
    },
  },
};
