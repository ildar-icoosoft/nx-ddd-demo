import { createAction, props } from '@ngrx/store';
import { Invoice } from '../../entities/invoice';

export const loadInvoice = createAction('[Invoice] Load Invoice');

export const loadInvoiceSuccess = createAction(
  '[Invoice] Load Invoice Success',
  props<{ invoice: Invoice[] }>()
);

export const loadInvoiceFailure = createAction(
  '[Invoice] Load Invoice Failure',
  props<{ error: any }>()
);
