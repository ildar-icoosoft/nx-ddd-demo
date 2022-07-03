import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { loadInvoice } from '../+state/invoice/invoice.actions';
import * as fromInvoice from '../+state/invoice/invoice.reducer';
import * as InvoiceSelectors from '../+state/invoice/invoice.selectors';

@Injectable({ providedIn: 'root' })
export class ManageInvoicesFacade {
  loaded$ = this.store.pipe(select(InvoiceSelectors.getInvoiceLoaded));
  invoiceList$ = this.store.pipe(select(InvoiceSelectors.getAllInvoice));
  selectedInvoice$ = this.store.pipe(select(InvoiceSelectors.getSelected));

  constructor(private store: Store<fromInvoice.InvoicePartialState>) {}

  load(): void {
    this.store.dispatch(loadInvoice());
  }
}
