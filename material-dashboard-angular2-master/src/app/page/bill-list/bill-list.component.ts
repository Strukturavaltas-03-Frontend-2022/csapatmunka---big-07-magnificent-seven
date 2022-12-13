import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import { Bill } from "app/model/bill";
import { Column } from "app/model/column";
import { BillService } from "app/service/bill.service";
import { ConfigService } from "app/service/config.service";
import { finalize } from "rxjs/internal/operators/finalize";

export class BillView {
  id: number = 0;
  orderID: number;
  amount: number;
  status: string = "new";

  constructor() { }
}


@Component({
  selector: "app-bill-list",
  templateUrl: "./bill-list.component.html",
  styleUrls: ["./bill-list.component.css"],
})
export class BillListComponent implements OnInit {
  bills: BillView[];
  loading: boolean;
  phraseString: string = "";

  direction: number = 1;
  columnKey: string = "";

  columns: Column[] = this.billService.columns;
  lastSelectedColumn: string = "";
  sortDir: string = "";
  displayedColumns: Column[] = [];

  constructor(
    private billService: BillService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.update();
    this.displayedColumns = [];
    this.columns.forEach((column, index) => {
      column.index = index;
      this.displayedColumns.push(column);
    });
  }

  onDelete(item: Bill) {
    this.billService.remove(item).subscribe((i) => {
      this.update();
    });
  }

  update(): void {
    this.loading = true;
    this.billService.getAll().pipe(
      finalize(() => { })
    ).subscribe(() => { });

    const x = setTimeout(() => {
      clearTimeout(x);
      const bills: BillView[] = [];
      this.billService.getAll().subscribe((items) => {
        this.bills = items;
        items.forEach(item => {
          const bill: BillView = new BillView();
          bill.id = item.id;
          bill.orderID = item.orderID;
          bill.amount = item.amount;
          bill.status = item.status;
          bill.status === 'new' ? bill.status = 'New' : bill.status = 'Paid';
          bills.push(bill)
        });
        this.bills = bills;
        this.loading = false; 
      });
    }, this.config.updateDelayTimeMs);
  }

  onColumnSelect(colName: string): void {
    if (this.lastSelectedColumn != colName)
      this.columns.forEach((i) => (i.sortDir = ""));
    this.lastSelectedColumn = colName;

    const state = this.billService.columns.find((i) => i.name == colName);
    if (state.sortDir == "") state.sortDir = "up";
    if (state.sortDir == "none") state.sortDir = "up";
    else if (state.sortDir == "up") state.sortDir = "down";
    else if (state.sortDir == "down") state.sortDir = "up";
    this.sortDir = state.sortDir;
  }

  onSearchPhrase(event: Event, colName: string): void {
    this.phraseString = (event.target as HTMLInputElement).value;
    this.lastSelectedColumn = colName;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray<Column>(this.displayedColumns, event.previousIndex, event.currentIndex);
  }
}
