import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesDomainModule } from '@nx-ddd-demo/invoices/domain';
import { ManageInvoicesComponent } from './manage-invoices.component';

@NgModule({
  imports: [CommonModule, InvoicesDomainModule],
  declarations: [ManageInvoicesComponent],
  exports: [ManageInvoicesComponent],
})
export class InvoicesFeatureManageInvoicesModule {}
