import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersDomainModule } from '@nx-ddd-demo/orders/domain';
import { ManageOrdersComponent } from './manage-orders.component';

@NgModule({
  imports: [CommonModule, OrdersDomainModule],
  declarations: [ManageOrdersComponent],
  exports: [ManageOrdersComponent],
})
export class OrdersFeatureManageOrdersModule {}
