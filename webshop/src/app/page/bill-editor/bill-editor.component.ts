import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-bill-editor',
  templateUrl: './bill-editor.component.html',
  styleUrls: ['./bill-editor.component.scss'],
})
export class BillEditorComponent {
  bill$: Observable<Bill> = this.ar.params.pipe(
    switchMap((params) => this.billService.get(params['id']))
  );

  constructor(
    private ar: ActivatedRoute,
    private billService: BillService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onUpdate(bill: Bill): void {
    this.billService
      .update(bill)
      .subscribe((bill) => this.router.navigate(['/']));
  }
}
