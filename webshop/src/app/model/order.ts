enum statusStates {
  new = 'new',
  shipped = 'shipped',
  paid = 'paid',
}

export class Order {
  [x: string]: any;
  id: number = 0;
  customerID: number = 0;
  productID: number = 0;
  amount: number = 0;
  status: statusStates = statusStates.new;
}
