export class Order {
  [x: string]: any;
  id: number = 0;
  customerID: number = 0;
  productID: number = 0;
  amount: number = 0;
   status: T extends string <'new'|'shipped'|'paid'> = new;
}
