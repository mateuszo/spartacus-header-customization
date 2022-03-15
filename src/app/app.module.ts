import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  AppRoutingModule,
  GenericLinkModule,
  IconModule,
  OutletRefModule,
} from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { MyStorefrontModule } from './spartacus/my-storefront/my-storefront.module';
import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    MyStorefrontModule,
    IconModule,
    OutletRefModule,
    GenericLinkModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
