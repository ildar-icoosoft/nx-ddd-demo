import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Order } from '../entities/order';
import { OrderDataService } from '../infrastructure/order.data.service';

@Injectable({ providedIn: 'root' })
export class ManageOrdersFacade {
  private orderListSubject = new BehaviorSubject<Order[]>([]);
  orderList$ = this.orderListSubject.asObservable();

  constructor(private orderDataService: OrderDataService) {}

  load(): void {
    this.orderDataService.load().subscribe({
      next: (orderList) => {
        this.orderListSubject.next(orderList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
