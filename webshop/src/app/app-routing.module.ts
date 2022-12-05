import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillEditorComponent } from './page/bill-editor/bill-editor.component';
import { CustomerEditorComponent } from './page/customer-editor/customer-editor.component';
import { HomeComponent } from './page/home/home.component';
import { OrderEditorComponent } from './page/order-editor/order-editor.component';
import { ProductEditorComponent } from './page/product-editor/product-editor.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product/edit/:id',
    component: ProductEditorComponent,
  },
  {
    path: 'customer/edit/:id',
    component: CustomerEditorComponent,
  },
  {
    path: 'order/edit/:id',
    component: OrderEditorComponent,
  },
  {
    path: 'bill/edit/:id',
    component: BillEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
