import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Company } from 'src/app/model/company';
import { Customer } from 'src/app/model/customer';
import { Products } from 'src/app/model/products';
import { ReturnedProduct } from 'src/app/model/returned-product';
import { CompServiceService } from 'src/app/services/comp-service.service';
import { CustServiceService } from 'src/app/services/cust-service.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ProdServiceService } from 'src/app/services/prod-service.service';
import { ReturnShopServiceService } from 'src/app/services/return-shop-service.service';

@Component({
  selector: 'app-returnto-shop-add',
  templateUrl: './returnto-shop-add.component.html',
  styleUrls: ['./returnto-shop-add.component.scss']
})
export class ReturntoShopAddComponent implements OnInit {

  constructor(public proApi: ReturnShopServiceService,
    private router: Router,
    public proser: ProdServiceService,
    public compser: CompServiceService,
    public custSer: CustServiceService,
    private uploadService: FileUploadService) { }
  ngOnInit(): void {
    // this.getCompany();
    this.getallproduct();
    this.getallcustomer();
  }


  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];

  fileInfos?: Observable<any>;

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  }
  fileObj!: any;
  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    if (file) {
      this.uploadService.upload(file).subscribe({
        next: (event: any) => {
          this.fileObj = event;
          this.productForm.value.fileData = this.fileObj.id
          console.log('-----------file--------',this.fileObj);          
          console.log('File obj id-', this.fileObj.body.id);

        },
        error: (err: any) => {

        }
      });
    }
  }

  uploadFiles(): void {
    this.message = [];
    if (this.selectedFiles) {
      this.upload(0, this.selectedFiles[0]);
    }
  }

  productList: Products[] = []

  companyList: Company[] = []

  customerList: Customer[] = []

  getallcustomer() {
    this.custSer.getData().subscribe((res: any) => {
      this.customerList = res
    })
  }

  getallproduct() {
    this.proser.getData().subscribe((res: any) => {
      this.productList = res
    })
  }

  productForm: FormGroup = new FormGroup({
    tradeName: new FormControl(''),
    customer: new FormControl(''),
    purchaseDate: new FormControl(''),
    returnDate: new FormControl(''),
    returnQTY: new FormControl(),
    fileData: new FormControl()
  })

  returnProduct!: ReturnedProduct;

  onsubmit() {
    console.log('File obj -', this.fileObj.body.id);
    this.productForm.value.fileData = this.fileObj.body.id 
    console.log(this.productForm.value.fileData);
    this.proApi.addData(this.productForm.value).subscribe((val: any) => {
      this.returnProduct = val;
      console.log(this.productForm.value);
      this.router.navigateByUrl('/returnshoplist');
    })
  }

}
