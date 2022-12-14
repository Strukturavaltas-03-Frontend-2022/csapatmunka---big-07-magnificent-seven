import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { ProductEditorComponent } from './page/product-editor/product-editor.component';
import { CustomerEditorComponent } from './page/customer-editor/customer-editor.component';
import { OrderEditorComponent } from './page/order-editor/order-editor.component';
import { BillEditorComponent } from './page/bill-editor/bill-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    HeaderComponent,
    ProductEditorComponent,
    CustomerEditorComponent,
    OrderEditorComponent,
    BillEditorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
