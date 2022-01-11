import { NgModule } from '@angular/core';
import { BaseStorefrontModule } from '@spartacus/storefront';
import { MyStorefrontModule } from './my-storefront/my-storefront.module';
import { SpartacusConfigurationModule } from './spartacus-configuration.module';
import { SpartacusFeaturesModule } from './spartacus-features.module';

@NgModule({
  declarations: [],
  imports: [
    SpartacusFeaturesModule,
    SpartacusConfigurationModule,
    BaseStorefrontModule,
    MyStorefrontModule,
  ],
  exports: [BaseStorefrontModule, MyStorefrontModule],
})
export class SpartacusModule {}
