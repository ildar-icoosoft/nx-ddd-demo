import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as InvoiceActions from './invoice.actions';
import { InvoiceDataService } from '../../infrastructure/invoice.data.service';

@Injectable()
export class InvoiceEffects {
  loadInvoice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InvoiceActions.loadInvoice),
      switchMap((action) =>
        this.invoiceDataService.load().pipe(
          map((invoice) => InvoiceActions.loadInvoiceSuccess({ invoice })),
          catchError((error) =>
            of(InvoiceActions.loadInvoiceFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private invoiceDataService: InvoiceDataService
  ) {}
}
