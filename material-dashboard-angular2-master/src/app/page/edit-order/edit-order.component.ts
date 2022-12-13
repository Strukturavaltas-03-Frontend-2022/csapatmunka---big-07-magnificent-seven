import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'app/model/order';
import { OrdersService } from 'app/service/orders.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  order: Order = new Order();
  loading: boolean = true;
  title: string = '';

  constructor(
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params =>{
        if(params.id == 0){
          this.order = new Order();
          this.title = 'New Item';
        }
        else
          this.ordersService.get(params.id).subscribe(
            item => {
              this.order = item;
              this.title = 'Edit';
            })
      }
    )
  }

  onUpdate(form: NgForm, item: Order): void {

    try {
      if (item.id == 0) {
        this.ordersService.create(item).subscribe(() => { });
        this.toastr.warning('Successfull');
        this.router.navigate(['/order-list']);
      }
      else {
        this.ordersService.update(item).subscribe(() => { });
        this.toastr.success('Successfull');
        this.router.navigate(['/order-list']);
      }
    } catch (error) {
      this.toastr.error('Error!' + error);
    }
  }

} 
