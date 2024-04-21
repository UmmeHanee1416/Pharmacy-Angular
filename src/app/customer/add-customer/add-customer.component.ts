import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { Employee } from 'src/app/model/employee';
import { Invoice } from 'src/app/model/invoice';
import { Products } from 'src/app/model/products';
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
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  onSelectChange(event: any) {
    var str = event.target.value;
    var splitted = str.split(",", 2);
    this.saledetForm.value.productId = splitted[0];
    this.availableQt = splitted[1];
    this.saledetForm.value.purchaseId = splitted[1];
  }
  empList: Employee[] = []
  empid: any;
  availableQt: any = 50;



  constructor(public proApi: CustServiceService,
    private router: Router,
    public saledet: SalesDetailServiceService,
    public salesser: SalesServiceService,
    public empser: EmpserviceService,
    public proser: ProdServiceService,
    public salesjson: SalesJsonService, 
    public invoiceSer:InvoiceServiceService) { }

  ngOnInit(): void {
    this.getallemp();
    this.getallpro();
  }

  productList: Products[] = []
  getallproduct() {
    this.proser.getData().subscribe((res: any) => {
      this.productList = res
      for (let index = 0; index < this.productList.length; index++) {
        const element = this.productList[index];
        if (this.productList[index].tradeName === this.prods.proname) {
          this.prods.proam = this.productList[index].remainedQuantity
        }
      }
    })
  }

  invoice!: Invoice;

  getInvoiceById(id: any) {
    this.invoiceSer.getById(id).subscribe((res: any) => {
      this.invoice = res;
      console.log(this.invoice);
    })
  }

  salesDetails!: SalesDetail;

  customer!: Customer;

  custForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    contact: new FormControl(''),
    purchaseDate: new FormControl(''),
    payMethod: new FormControl(),
    empId: new FormControl()
  })

  saledetForm: FormGroup = new FormGroup({
    productId: new FormControl(''),
    productQuantity: new FormControl('')
  })

  confirm = false;

  onsubmit() {
    this.custForm.value.salesDetailDTOS = this.salesDetailsList;
    this.proApi.addData(this.custForm.value).subscribe((val: any) => {
      this.customer = val;
      this.confirm = true;
      this.router.navigateByUrl('/saleslist');
    })    
  }

  salesDetailsList: SalesDetail[] = [];
  onsubmitDet() {
    var splitted = this.saledetForm.value.productId.split(",", 2);
    this.saledetForm.value.productId = splitted[0];
    this.salesDetailsList.push(this.saledetForm.value);
    this.clear();
  }

  expression = false

  onclick() {
    this.expression = true
  }

  clear() {
    this.saledetForm = new FormGroup({
      productId: new FormControl(''),
      productQuantity: new FormControl('')
    })
  }


  sales: Sales[] = []
  size!: number;

  getall() {
    this.salesser.getData().subscribe((res: any) => {
      this.sales = res;
      // console.log(this.sales.length);
      // this.size = this.sales.length + 1;
    })
  }
  getallemp() {
    this.empser.getData().subscribe((res: any) => {
      this.empList = res;
    })
  }


  salesForm: FormGroup = new FormGroup({
    customerId: new FormControl(),
    totalQuantity: new FormControl(),
    totalCharge: new FormControl(),
    empId: new FormControl()
  });

  onsubmitSales() {
    this.salesForm = new FormGroup({
      customerId: new FormControl(this.customer.contact),
      totalQuantity: new FormControl(this.salesDetails.productQuantity),
      totalCharge: new FormControl(),
      empId: new FormControl()
    });
    this.salesser.addData(this.salesForm.value).subscribe((val: any) => {
      this.router.navigateByUrl('/custlist');
    })
  }
  prods!: any
  getallpro() {
    this.proser.gettradeNremQ().subscribe((res: any) => {
      this.prods = res;
    })
  }

  salesFormjson: FormGroup = new FormGroup({
    name: new FormControl(),
    qt: new FormControl(),
  });

  deleteSalesJson(name: any) {
    this.salesDetailsList.reduce(name);
  }
  salesjsonList: any[] = []
  // getalljson() {
  //   this.salesjson.getAll().subscribe((res: any) => {
  //     this.salesjsonList = res
  //   })
  // }

}
