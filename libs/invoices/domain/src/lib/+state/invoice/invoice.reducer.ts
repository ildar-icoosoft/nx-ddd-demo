import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as InvoiceActions from './invoice.actions';
import { Invoice } from '../../entities/invoice';

export const INVOICE_FEATURE_KEY = 'invoices-invoice';

export interface State extends EntityState<Invoice> {
  selectedId?: string | number; // which Invoice record has been selected
  loaded: boolean; // has the Invoice list been loaded
  error?: string | null; // last known error (if any)
}

export interface InvoicePartialState {
  readonly [INVOICE_FEATURE_KEY]: State;
}

export const invoiceAdapter: EntityAdapter<Invoice> =
  createEntityAdapter<Invoice>();

export const initialState: State = invoiceAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const invoiceReducer = createReducer(
  initialState,
  on(InvoiceActions.loadInvoice, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(InvoiceActions.loadInvoiceSuccess, (state, { invoice }) =>
    invoiceAdapter.upsertMany(invoice, { ...state, loaded: true })
  ),
  on(InvoiceActions.loadInvoiceFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return invoiceReducer(state, action);
}
