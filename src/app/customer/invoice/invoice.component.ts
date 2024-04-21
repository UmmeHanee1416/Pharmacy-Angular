import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { Invoice } from 'src/app/model/invoice';
import { Sales } from 'src/app/model/sales';
import { SalesDetail } from 'src/app/model/sales-detail';
import { CustServiceService } from 'src/app/services/cust-service.service';
import { EmpserviceService } from 'src/app/services/empservice.service';
import { InvoiceServiceService } from 'src/app/services/invoice-service.service';
import { ProdServiceService } from 'src/app/services/prod-service.service';
import { SalesDetailServiceService } from 'src/app/services/sales-detail-service.service';
import { SalesJsonService } from 'src/app/services/sales-json.service';
import { SalesServiceService } from 'src/app/services/sales-service.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  constructor(public proApi: CustServiceService,
    private router: Router,
    public saledet: SalesDetailServiceService,
    public salesser: SalesServiceService,
    public empser: EmpserviceService,
    public proser: ProdServiceService,
    public salesjson: SalesJsonService,
    private route: ActivatedRoute,
    private invoiceSer: InvoiceServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getInvoiceById(this.id);
    // this.getCust(this.sales);
  }

  id: any;
  sales!: Sales;
  customer!: Customer
  product: any
  salesDeailList: SalesDetail[] = []

  getCust(id: any) {
    this.proApi.getById(id).subscribe((res: any) => {
      this.customer = res;
      console.log(this.customer);      
      // this.form.saleDate = this.customer.purchaseDate
      // console.log(this.form.saleDate);
    })
  }

  // form: any = {
  //   salesId: null,
  //   customerId: null,
  //   soldQty: null,
  //   saleDate: null
  // };

  invoice!: Invoice;

  getInvoiceById(id: any) {
    this.invoiceSer.getById(id).subscribe((res: any) => {
      this.invoice = res;
      console.log(this.invoice);      
      this.getSales(this.invoice.salesId)
      this.getCust(this.invoice.customerId);
      this.getbySales(this.invoice.salesId);
    })
  }

  getSales(id: any) {
    this.salesser.getById(id).subscribe((res: any) => {
      this.sales = res;
      // console.log(this.sales);
      // this.getCust(this.sales.customerId)
      this.getbySales(this.sales.id);
      // this.form.value.salesID = this.sales.id
      // this.form.customerId = this.sales.customerId
      // this.form.soldQty = this.sales.totalQuantity
      // console.log(this.form.value.salesID);
      // console.log(this.form.customerId);
      // console.log(this.form.soldQty);

    })
  }

  getbySales(sId: any) {
    this.saledet.getBySales(sId).subscribe((res: any) => {
      this.salesDeailList = res;
    })
  }

  getProduct(id: any) {
    this.proser.addProduct(id).subscribe((res: any) => {
      this.product = res;
      // console.log(this.product);
    })
  }

  payable = false

  paid() {
    this.payable = true;
    window.print();
  }
  tolist() {
    this.router.navigateByUrl('/custlist');
  }

}
