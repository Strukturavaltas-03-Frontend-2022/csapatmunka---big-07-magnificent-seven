import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  { path: "/product-list", title: "Products", icon: "content_paste", class: "" },
  { path: "/address-list", title: "Address", icon: "library_books", class: "" },
  { path: "/bill-list", title: "Bill", icon: "credit_score", class: "" },
  { path: '/order-list', title: 'Order', icon: 'border_color', class: '' },
  { path: '/customer-list', title: 'Customer', icon: 'people', class: '' },

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
