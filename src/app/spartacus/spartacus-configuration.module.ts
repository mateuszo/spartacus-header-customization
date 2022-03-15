import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from '@spartacus/assets';
import {
  FeaturesConfig,
  I18nConfig,
  OccConfig,
  provideConfig,
  SiteContextConfig,
} from '@spartacus/core';
import {
  defaultCmsContentProviders,
  IconConfig,
  IconResourceType,
  layoutConfig,
  mediaConfig,
} from '@spartacus/storefront';
import { myLayoutConfig } from './layout.config';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(myLayoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443',
        },
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        currency: ['USD'],
        language: ['en'],
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '4.2',
      },
    }),
    provideConfig({
      icon: {
        symbols: {
          CART: 'cart',
          HOME: 'home',
          MENU: 'menu',
          USER: 'account',
          WISHLIST: 'wishlist',
        },
        resources: [
          {
            type: IconResourceType.SVG,
            url: './assets/icons-sheet.svg',
            types: ['CART', 'HOME', 'MENU', 'USER', 'WISHLIST'],
          },
          {
            type: IconResourceType.LINK,
            url: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
          },
        ],
      },
    } as IconConfig),
  ],
})
export class SpartacusConfigurationModule {}
