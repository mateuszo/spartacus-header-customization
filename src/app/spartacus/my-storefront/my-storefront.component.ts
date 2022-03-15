import { Component } from '@angular/core';
import { StorefrontComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-my-storefront',
  templateUrl: './my-storefront.component.html',
  styleUrls: ['./my-storefront.component.scss'],
})
export class MyStorefrontComponent extends StorefrontComponent {}
