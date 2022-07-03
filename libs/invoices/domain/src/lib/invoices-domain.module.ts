import * as fromInvoice from './+state/invoice/invoice.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceEffects } from './+state/invoice/invoice.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromInvoice.INVOICE_FEATURE_KEY,
      fromInvoice.reducer
    ),
    EffectsModule.forFeature([InvoiceEffects]),
  ],
})
export class InvoicesDomainModule {}
