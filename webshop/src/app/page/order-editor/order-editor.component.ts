import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-editor',
  templateUrl: './order-editor.component.html',
  styleUrls: ['./order-editor.component.scss'],
})
export class OrderEditorComponent {
  order$: Observable<Order> = this.ar.params.pipe(
    switchMap((params) => this.orderService.get(params['id']))
  );
  constructor(
    private ar: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  onUpdate(order: Order): void {
    this.orderService
      .update(order)
      .subscribe((order) => this.router.navigate(['/']));
  }
}
