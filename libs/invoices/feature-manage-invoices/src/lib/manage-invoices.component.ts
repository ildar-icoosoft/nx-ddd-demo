import { Component, OnInit } from '@angular/core';
import { ManageInvoicesFacade } from '@nx-ddd-demo/invoices/domain';

@Component({
  selector: 'invoices-manage-invoices',
  templateUrl: './manage-invoices.component.html',
  styleUrls: ['./manage-invoices.component.scss'],
})
export class ManageInvoicesComponent implements OnInit {
  invoiceList$ = this.manageInvoicesFacade.invoiceList$;

  constructor(private manageInvoicesFacade: ManageInvoicesFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.manageInvoicesFacade.load();
  }
}
