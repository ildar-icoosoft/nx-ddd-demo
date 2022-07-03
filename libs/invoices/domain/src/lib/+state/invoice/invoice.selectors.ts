import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  INVOICE_FEATURE_KEY,
  State,
  InvoicePartialState,
  invoiceAdapter,
} from './invoice.reducer';

// Lookup the 'Invoice' feature state managed by NgRx
export const getInvoiceState = createFeatureSelector<
  InvoicePartialState,
  State
>(INVOICE_FEATURE_KEY);

const { selectAll, selectEntities } = invoiceAdapter.getSelectors();

export const getInvoiceLoaded = createSelector(
  getInvoiceState,
  (state: State) => state.loaded
);

export const getInvoiceError = createSelector(
  getInvoiceState,
  (state: State) => state.error
);

export const getAllInvoice = createSelector(getInvoiceState, (state: State) =>
  selectAll(state)
);

export const getInvoiceEntities = createSelector(
  getInvoiceState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getInvoiceState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getInvoiceEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
