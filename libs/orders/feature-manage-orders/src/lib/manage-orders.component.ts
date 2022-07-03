import { Component, OnInit } from '@angular/core';
import { ManageOrdersFacade } from '@nx-ddd-demo/orders/domain';

@Component({
  selector: 'orders-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.scss'],
})
export class ManageOrdersComponent implements OnInit {
  orderList$ = this.manageOrdersFacade.orderList$;

  constructor(private manageOrdersFacade: ManageOrdersFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.manageOrdersFacade.load();
  }
}
